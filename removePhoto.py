# This is to delete all the irrelevant photos from the local folder in order to be able to
import os
from testing import ROI_number
# C:\Users\Lawrence\Desktop\FitCheck\FitCheck\ROI_images
path = r"C:\Users\Lawrence\Desktop\FitCheck\FitCheck\ROI_images"
for i in range(ROI_number+1):  # for loop to go through all the bounded images
    try:
        # finds the path to the specific file
        tempPath = os.path.join(path, "ROI_{}.jpg".format(i))
        os.remove(tempPath)  # removes the file if applicable
    except OSError as e:  # name the Exception `e`
        print("Failed with:", e.strerror)  # look what it says
