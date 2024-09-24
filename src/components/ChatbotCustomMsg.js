export default function ChatbotCustomMsg({ onButtonPress }) {
  function buttonHandler(msg) {
    onButtonPress(msg);
  }

  return (
    <>
      <div className="" style={{fontFamily:"kufi"}}>
        <button
          className="btn btn-secondary m-1"
          style={{ fontSize: "18px" }}
          onClick={() => buttonHandler("I want to ask a question!")}
        >
          I want to ask a question!
        </button>
        <button
          className="btn btn-secondary m-1"
          style={{ fontSize: "18px" }}
          onClick={() => buttonHandler("Who are you?")}
        >
          Who are you?
        </button>
        <button
          className="btn btn-secondary m-1 "
          style={{ fontSize: "18px" }}
          onClick={() => buttonHandler("What is the video about?")}
        >
          What is the video about?
        </button>
        <button
          className="btn btn-secondary m-1 "
          style={{ fontSize: "18px" }}
          onClick={() => buttonHandler("Will you help me?")}
        >
          Will you help me?
        </button>
        <button
          className="btn btn-secondary m-1 "
          style={{ fontSize: "18px" }}
          onClick={() => buttonHandler("I need assistance with something.")}
        >
          I need assistance with something.
        </button>
      </div>
    </>
  );
}
