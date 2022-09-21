from doctest import Example
from ximilar.client import FashionTaggingClient
from PIL import Image
import cv2
import numpy as np
import os
import requests
from io import BytesIO
import base64
from pathlib import Path
import json
import webbrowser
import http.client


def url_to_img(url, save_as=''):  # converts a url of an image to an actual image
    img = Image.open(BytesIO(requests.get(url).content))
    if save_as:
        img.save(save_as)
    return np.array(img)


    # image url that we pass in
imageurl = "https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG91dGZpdHxlbnwwfHwwfHw=&w=1000&q=80"
# calling the function in order to be able to apply bounding boxes to it
img = url_to_img(imageurl, 'ROI.jpg')

clothingArticles = []  # used to hold all the bounding boxes of the clothing articles
clothingTags = []  # list that holds the tags of each article of clothing
# reading the image with opencv so that we can apply bounding boxes to it
imagefile = cv2.imread(r"C:\Users\Seung\Desktop\FitCheck\ROI.jpg")

### XIMILAR API CALL #######################################################################################################################################################
fashion_client = FashionTaggingClient(
    token="67964b65b56bbda8129b292af1d91f2ad4acfc84")  # our token

result = fashion_client.detect_tags([{"_url": imageurl}])
# output holds the list of all the objects in the image (ex - all the clothing)
output = result["records"][0]["_objects"]
ROI_number = 0  # creates a number to identify the ROI (Region of Interest)
for article in output:  # for loop to go through all the objects in the image
    # appends the bounding box of the article of clothing to the list
    clothingArticles.append(article["bound_box"])
    # copies the image so that we can later save another image with the bounding boxes
    # has to be img, cannot be imagefile (imagefile is a url so it cannot copy)
    # have to correct color for the copy of the image
    correctColorImg = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    copy = correctColorImg.copy()
    x, y, w, h = [clothingArticles[ROI_number][0], clothingArticles[ROI_number]
                  [1], clothingArticles[ROI_number][2], clothingArticles[ROI_number][3]]
    # being able to use the bounding box that the API calls and returns to find the specific article of clothing
    ROI = copy[y:h, x:w]  # applies the box to the copy of the image
    # have a path to the folder that holds all the isolated photos
    path = r"C:\Users\Lawrence\Desktop\FitCheck\FitCheck\ROI_images"
    # writes to the folder that holds all photos
    cv2.imwrite(os.path.join(path, "ROI_{}.jpg".format(ROI_number)), ROI)
    # get the path/directory
    ROI_number += 1  # increments the number to identify the ROI
counter = 0
images = Path(path).glob("*.jpg")
for image in images:  # loop through folder to call api for each image object to get specific tags of each article of clothing
    with open(image, "rb") as image_file:
        encoded_string = base64.b64encode(
            image_file.read()).decode('utf-8')
    # API call will either take "_url" or "_base64"
    singleResult = fashion_client.detect_tags([{"_base64": encoded_string}])
    # this grabs the bounded box's objects that were detected
    output = singleResult["records"][0]["_objects"]
    # grabs the tags that were found with the bounded object
    clothingTags.append(output[0]["_tags_simple"])
    # clothingTags.append(result)
# Using Asos products/v2/list endpoint
# print(clothingTags[0])
conn = http.client.HTTPSConnection("asos2.p.rapidapi.com")

headers = {
    'X-RapidAPI-Host': "asos2.p.rapidapi.com",
    'X-RapidAPI-Key': "f14cdd5314msh117e43c0e7b59e7p193207jsn3f526f36b819",
}
Filter = ["adult", "children", "teen", "clothing", "clothing/pants", "clothing/upper", "clothing/lower",
          "casual", "work", "elegant", "sport", "special", "plain",
          "winter", "cosmetic", "camera", "city", "cases", "duffel", "suitcases", "travel", "not visible pants", ]
space = "%20"
# input = "black"+space+"purse"
# this will loop through the list with our tags that we've collected.
asoslinkArray = []
for numOfTags in range(len(clothingTags)):
    input = ""
    print(clothingTags[numOfTags])
    for tag in clothingTags[numOfTags]:
        if (tag.lower() in Filter):  # omit any clothing tags
            pass
        else:  # if it doesn't contain clothing as a tag then we'll add it
            input += " " + tag
    # print(input)
    input = input.replace(" ", "%20")

    search = "/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=" + \
        input+"&currency=USD&sizeSchema=US&lang=en-US"
    # conn.request("GET", "/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=black%20purse&currency=USD&sizeSchema=US&lang=en-US", headers=headers)

    conn.request("GET", search, headers=headers)

    res = conn.getresponse()
    data = res.read()

    #parse = json.loads(data)
    #active_case = parse['products'][0]['url']
    # print(parse)

    #link = "https://www.asos.com/us/calvin-klein/" + active_case
    asosLink = "https://www.asos.com/us/search/?page=1&q=" + input
    chrome = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    # webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome))
    # webbrowser.get('chrome').open_new_tab(link)
    # linkArray.append(link)
    asoslinkArray.append(asosLink)
    numOfTags += 1
#print(asoslinkArray)
