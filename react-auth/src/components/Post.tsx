import { Post as PostInterFace } from "../publicInterFace";
import styles from "./Post.module.css";
function Post({ data }: { data: PostInterFace }) {
  return (
    <div className={styles.card}>
      <header>
        <h2>{data.title}</h2>
        <div className={styles.info}>
          <span>
            Author : <span style={{ color: "gold" }}>{data.user.email}</span>
          </span>
          <span>
            Date :{" "}
            <span style={{ color: "gold" }}>
              {new Date(data.created_at).toLocaleDateString()}
            </span>
          </span>
        </div>
      </header>
      <div className={styles.body}>{data.content}</div>
    </div>
  );
}
export default Post;
