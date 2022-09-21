import React from 'react';
import Masony from "react-masonry-component";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	navlinks: {
	  marginLeft: theme.spacing(10),
	  display: "flex",
	},
	logo: {
	  flexGrow: "1",
	  cursor: "pointer",
	},
	link: {
	  textDecoration: "none",
	  color: "white",
	  fontSize: "20px",
	  marginLeft: theme.spacing(20),
	  "&:hover": {
		color: "yellow",
		borderBottom: "1px solid white",
	  },
	},
  }));

const PHOTOS = [
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/39/c0/39c0f11d976d4113cdd470fc989e395068640af5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/c4/e2/c4e294768dae3295583e2a9dfebed944a802204b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/3d/e7/3de77b845d90f9771841aa20b405095575937090.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/c1/0e/c10e7a9dffd77f17a18c4856c2606a2236c6e913.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/89/b5/89b5bb919c475dcdc536815c8da3a8804be3e00a.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/75/92/7592c7d711b50da59ffa63391a21f8667689ba10.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/39/c0/39c0f11d976d4113cdd470fc989e395068640af5.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/c4/e2/c4e294768dae3295583e2a9dfebed944a802204b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/3d/e7/3de77b845d90f9771841aa20b405095575937090.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/c1/0e/c10e7a9dffd77f17a18c4856c2606a2236c6e913.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/89/b5/89b5bb919c475dcdc536815c8da3a8804be3e00a.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
	},
	{
	  imageUrl:
		"https://lp2.hm.com/hmgoepprod?set=source[/75/92/7592c7d711b50da59ffa63391a21f8667689ba10.jpg],origin[dam],category[],type[LOOKBOOK],res[y],hmver[1]&call=url[file:/product/main]",
	},
  ];

  const masonryOptions = {
	fitWidth: false,
	columnWidth: 300,
	gutter: 40,
	itemSelector: ".photo-item",
  };

const Explorer = () => {
	return (
	<div>
		<div
			style={{
			display: 'flex',
			justifyContent: 'Center',
		}}>
			<h1>FitCheck Explorer Page</h1>
		</div>
	<>
		<div>
			<Masony
			className={"photo-list"}
			elementType={"ul"}
			options={masonryOptions}
			disableImagesLoaded={false}
			updateOnEachImageLoad={false}
			>
			{PHOTOS.map((photo) => (
				<>
				<li className={`photo-item`}>
					<img src={photo.imageUrl} alt="view" />
				</li>
				{/* <li>
					hello
					</li> */}
				</>
			))}

			</Masony>
      	</div>
	</>
	</div>
);
};

export default Explorer;