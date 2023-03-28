import React from 'react'

const commentsData = [
    {
        name: "Kaustubh Sinha",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Kaustubh Sinha",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Kaustubh Sinha",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Kaustubh Sinha",
                                text: "lorem ipsum dolor sit amet, consectetur adip",
                                replies: []
                            },
                            {
                                name: "Kaustubh Sinha",
                                text: "lorem ipsum dolor sit amet, consectetur adip",
                                replies: []
                            },
                            {
                                name: "Kaustubh Sinha",
                                text: "lorem ipsum dolor sit amet, consectetur adip",
                                replies: []
                            },
                        ]
                    },
                    {
                        name: "Kaustubh Sinha",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Kaustubh Sinha",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Kaustubh Sinha",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                ]
            },
            {
                name: "Kaustubh Sinha",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Kaustubh Sinha",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Kaustubh Sinha",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
        ]
    },
    {
        name: "Kaustubh Sinha",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: []
    },
    {
        name: "Kaustubh Sinha",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: []
    },
    {
        name: "Kaustubh Sinha",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: []
    },
];

const Comment = ({ data }) => {

    const { name, text } = data;

    return (
        <div className="flex mt-3 bg-gray-100 w-[802px]">
            <img 
                className="w-12 h-12"
                alt="userIcon"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="mx-3">
                <p className="font-semibold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-gray-400 ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
  return (
    <div className="px-3 mt-5">
        <h1 className="text-2xl font-semibold">Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;