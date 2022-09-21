import http.client
import requests
from io import BytesIO
import json
import webbrowser

# Using Asos products/v2/list endpoint

conn = http.client.HTTPSConnection("asos2.p.rapidapi.com")

headers = {
    'X-RapidAPI-Host': "asos2.p.rapidapi.com",
    'X-RapidAPI-Key': "f14cdd5314msh117e43c0e7b59e7p193207jsn3f526f36b819"
    }

space = "%20"
# input = "black"+space+"purse"
input = "black purse"
input = input.replace(" ", "%20")


search = "/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q="+input+"&currency=USD&sizeSchema=US&lang=en-US"
# conn.request("GET", "/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=black%20purse&currency=USD&sizeSchema=US&lang=en-US", headers=headers)

conn.request("GET", search, headers=headers)


res = conn.getresponse()
data = res.read()

parse = json.loads(data)
active_case = parse['products'][0]['url']
print(parse)

link = "https://www.asos.com/us/calvin-klein/" + active_case
chrome = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
webbrowser.register('chrome', None,webbrowser.BackgroundBrowser(chrome))
webbrowser.get('chrome').open_new_tab(link)

# print(data.decode("utf-8"))

# def url_to_img(url, save_as=''): #converts a url of an image to an actual image
#   img = Image.open(BytesIO(requests.get(url).content))
#   if save_as:
#     img.save(save_as)
#   return np.array(img)

# imageurl = "http://images.asos-media.com/products/calvin-klein-new-monogram-5cc-coin-purse-in-black/201590820-1-black" #image url that we pass in
# img = url_to_img(imageurl, 'ROI.jpg')
