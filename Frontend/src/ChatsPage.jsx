import './ChatsPage.css'

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh"}}>
      <PrettyChatWindow
        projectId={'57d2b5ed-7ef5-4e7a-91c8-ab0009b21c18'}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;