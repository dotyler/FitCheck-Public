import pfp from '../Images/sampleprofilepic.png';
import header from '../Images/sampleheaderimage.jpeg';
import React from 'react';
import Masony from "react-masonry-component";
import './profile.css';
const PHOTOS = [
	{
	  imageUrl:
		"https://i.pinimg.com/564x/c8/0f/b3/c80fb34d642c3b9ffe167d327409a0f1.jpg",
	},
	{
	  imageUrl:
		"https://i.pinimg.com/564x/a5/0a/c1/a50ac1fa7946f557f915e40083669d6a.jpg",
	},
	{
	  imageUrl:
		"https://i.pinimg.com/564x/b3/de/89/b3de89afd94bfd4796bccdbfcc434b9e.jpg",
	},
	{
	  imageUrl:
		"https://i.pinimg.com/564x/43/71/5e/43715e6cf7076b0a44a9cd7546c1991a.jpg",
	},
	{
	  imageUrl:
		"https://i.pinimg.com/564x/d2/2d/ec/d22dece2653c7bab4aad7dd81d3682e9.jpg",
	},
	{
	  imageUrl:
		"https://i.pinimg.com/564x/c6/e6/69/c6e669d20b6c69432e53cf3057deaefb.jpg",
	},
  ];
  
  

const masonryOptions = {
	fitWidth: false,
	columnWidth: 300,
	gutter: 30,
	itemSelector: ".photo-item",
  };

const Profile = () => {
return (
	<div class="profilepage">
		<div class = "headerimage">
			<img class = "headerimg" height={200} width="auto" src={header} alt="header"/>
		</div>
		<div class = "profilepic">
			<img class = "pfp" height={150} width={150} src={pfp} alt="profile picture"/>
		</div>
		<div class = "username">
			<h2>Username</h2>
		</div>
		<div class = "handle">
			<p>@username123</p>
		</div>
		<div class = "bio">
			<p>Biography</p>
		</div>
		<hr class = "horizontalline"></hr>
		<div class = "usercontent">
			<Masony
				className={"photo-list"}
				elementType={"ul"}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{PHOTOS.map((photo) => (
				<li className={`photo-item`}>
					<img src={photo.imageUrl} alt="" />
				</li>
				))}
			</Masony>
			
		</div>
	</div>
);
};

export default Profile;