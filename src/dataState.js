//Import Images
import react1 from "./images/react1.jpg";
import react2 from "./images/react2.jpg";
import js from "./images/js1.jpg";
import js2 from "./images/js2.jpg";
import soon from "./images/soon1.jpg";
import soon2 from "./images/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title : "Interaktiv React va Redux" ,
      mainImg: react1,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
      ] ,
    } ,
    {
      title: "Tez kunda",
      mainImg : soon ,
      url: "/courses/soon",
      secondaryImg: soon2,
      awards: [
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
      ] ,
    } ,
    {
      title : "Interactive JavaScript" ,
      mainImg : js ,
      url: "/courses/js",
      secondaryImg: js2,
      awards: [
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
        {
          title : "The Law itself if" ,
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        } ,
      ] ,
    } ,
  ] ;
};

export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas totam minus ut amet voluptatum dolores incidunt quis possimus reprehenderit, quod consectetur, enim fuga optio dignissimos veniam quasi ipsa itaque!",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas totam minus ut amet voluptatum dolores incidunt quis possimus reprehenderit, quod consectetur, enim fuga optio dignissimos veniam quasi ipsa itaque!",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas totam minus ut amet voluptatum dolores incidunt quis possimus reprehenderit, quod consectetur, enim fuga optio dignissimos veniam quasi ipsa itaque!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas totam minus ut amet voluptatum dolores incidunt quis possimus reprehenderit, quod consectetur, enim fuga optio dignissimos veniam quasi ipsa itaque!",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas totam minus ut amet voluptatum dolores incidunt quis possimus reprehenderit, quod consectetur, enim fuga optio dignissimos veniam quasi ipsa itaque!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]