# FitCheck

[Blog Post](https://blog.uta.edu/cseseniordesign/2022/04/14/fitcheck/)

## Team Name

SlackOverflow

## Timeline

### Fall 2021 – Spring 2022
Students:
Tyler Do, B.S. CpE
    
An Nguyen, B.S. CS
    
Brian Truong, B.S. CS
    
Lawrence Wong, B.S. CS
    
    
    
## Poster

![FitCheck Final Poster Presentation](https://blog.uta.edu/cseseniordesign/files/2022/05/Group-98-1024x768.png)

FitCheck Final Poster Presentation

## Abstract

FitCheck is a web application that allows users to visually search for clothes, built with Firebase, Express, ReactJS, and Node. The application leverages image recognition and visual search technologies to make it easier for everyday shoppers to locate desired clothing on the internet. Users can upload an image of an outfit containing articles of clothing they’d like to shop for and our system will process and analyze the image to recommend a list of e-commerce listings of similar pieces. FitCheck is a way to discover outfits without needing the right words to describe them. We aim for our visual outfit search engine to significantly improve the online shopping experience for the average consumer.

## Background

Instagram, Pinterest, and Depop have enabled consumers to have more interactions with fashion designers, influencers, and firms. However, with all the fashion and beauty content being uploaded, it can be difficult for the average shopper to find original posts and locate where to buy the clothing that inspires them. Commercial visual search systems like Google Reverse Image Search are designed to retrieve photos with the exact same object as the query image, making it difficult to find the origin of non-existing images online. FitCheck extends existing visual search systems by recommending visually similar results from new, non-existing photos. Users can upload new images they might see online (ex. a pink long sleeve blouse a celebrity posted on Instagram) and get recommended similar pieces of clothing
Project Requirements

    The system will recommend a minimum of three e-commerce listings similar to the input.
    The system will create bounding boxes for each article of clothing from the output.
    The system will derive descriptive annotations of the clothing pieces. (ex. [“blue”, loafers”])
    The system will use image recognition to process the articles of clothing in the outfit image.
    Clicking the e-commerce listing will route users to the original listing.
    Users can upload an image of an outfit.
    The web application will have a home page.
    Users will be able to create an account.
    The user will be able to create an account with Google.
    Users can log in and log out.

## System Overview
![FitCheck System Overview Image](https://blog.uta.edu/cseseniordesign/files/2022/05/Group-11-1-1024x583.png)
FitCheck’s overall architecture is separated into three logical components: image parsing, query understanding layer, and e-commerce recommendation layer.

1. The first component is the image parsing layer where FitCheck sends the input image to the Ximilar API, which uses image recognition to analyze and create bounding boxes for each article of clothing. The bounding boxes are then separated into their own images to be sent to the query understanding layer.

2. The second component is a query understanding layer where FitCheck sends each article of clothing to a Fashion Tagging API to derive information regarding the given input image. Here FitCheck computes semantic features such as annotations, top category and category.

3. The third component is the e-commerce recommendation layer. The annotations from the query understanding layer are sent to multiple e-commerce API’s which then use those semantics to search e-commerce listings and output similar items.

## Results

![Demo Video](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=y52CnqCCy-Q)

As a result, FitCheck is able to upload a user’s image into a cloud-based storage server to parse, annotate, and identify components from the image to recommend clothing items back to the users. Our team’s was able to complete our requirements and object to develop an application to reverse image search in real time and deploy a functioning demo.
Future Work

Visual search and recommendation systems can significantly change the way we browse for clothes online. In addition to still images, we hope to support visual searching of live images/videos in future work. Currently, our e-commerce recommendation layer only pulls from six e-commerce sites to find similar articles of clothing (limited by the e-commerce API). For future work, we want to expand on the number of sites we recommend from. Additionally, we want to add another component to the e-commerce recommendation layer, where object search technology would be used to return projects with visually similar objects in addition to image searches based on the derived annotations. We hope to increase the accuracy of the results that FitCheck returns by having them come from multiple sources.
Project Files

[Project Charter (link)](https://www.overleaf.com/read/vzfvnfwbqwrb)

[System Requirements Specification (link)](https://www.overleaf.com/read/hyjrtjtmqpvz)

[Architectural Design Specification (link)](https://www.overleaf.com/read/jvdqgwzdtzrv)

[Detailed Design Specification (link)](https://www.overleaf.com/read/jzzmhvjngbgm)

[Poster ([link])](https://drive.google.com/file/d/1qOSOcapgfPDDn1w0gSiPN9zXY7accxwm/view?usp=sharing)
## References

    “Building a Visual Search Algorithm.” Ideo.Com, www.ideo.com/datascope/building-a-visual-search-algorithm. Accessed 5 May 2022.
    Le, James. “Pinterest’s Visual Lens: How Computer Vision Explores Your Taste.” Medium, 12 July 2018, towardsdatascience.com/pinterests-visual-lens-how-computer-vision-explores-your-taste-5470f87502ad.
