import { useParams } from "react-router-dom";

export default function Topic({ contents }) {

  const params = useParams();
  const topic_id = parseInt(params.topic_id);

  const selected_topic = {
    title: 'Sorry',
    desc: 'Not found'
  };

  const target_content = contents.find((content) => content.id === topic_id);
  
  if(target_content) {
    selected_topic.title = target_content.title;
    selected_topic.desc = target_content.desc;
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.desc}</p>
    </div>
  );
}