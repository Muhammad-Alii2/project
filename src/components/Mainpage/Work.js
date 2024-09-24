import createCourse from "../../../public/images/mainpage/createCourse.png";
import Quiz from "../../../public/images/mainpage/Quiz.png";
import progress from "../../../public/images/mainpage/progress.png";
import result from "../../../public/images/mainpage/result.png";
import ChatBot from "../../../public/images/mainpage/ChatBot.png";
import gallery from "../../../public/images/mainpage/gallery.png";
import history from "../../../public/images/mainpage/history.png";
import credit from "../../../public/images/mainpage/credit.png";
import Image from 'next/image';

const Work = () => {
  const workInfoData = [
    {
      image: createCourse,
      title: "Course Generation",
      text: "We compile course content to create comprehensive learning materials according to the user preferences and needs.",
    },
    {
      image: Quiz,
      title: "Quiz Generation",
      text: " Quizzes are dynamically created from video transcripts to ensure relevance and engagement.",
    },
    {
      image: progress,
      title: "User Progress",
      text: " Monitor and track individual user progress across all course.",
    },
    {
      image: result,
      title: "Progress result",
      text: "Assess user activity and performance to assign grades and provide feedback on their progress.",
    },
    {
      image: ChatBot,
      title: "ChatBot",
      text: "Our chatbot assists users in resolving queries and providing support throughout their learning.",
    },
    {
      image: gallery,
      title: "User specified gallery",
      text: "Every user has a personalized gallery where they can access and organize content tailored to their preferences and needs.",
    },
    {
      image: credit,
      title: "Credits Introduction",
      text: "Unlock premium features by purchasing credits. Use your credits to access more",
    },
    {
      image: history,
      title: "Credit History",
      text: "View all credit usage and payment transactions in one place, including purchase details and spending history",
    }
  ];

  return (
    <div className="work-section-wrapper" style={{ fontFamily: "kufi", color: "", fontWeight: "bold", marginBottom: "6rem" }}>
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">How It <span style={{ fontFamily: "angrybird", color: "#fe9e0d" }} >Works</span></h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              {data.icon ? <data.icon size={150} /> : <Image src={data.image} alt="" width={180} height={180} />} {/* Render the icon component or the image */}
            </div>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
