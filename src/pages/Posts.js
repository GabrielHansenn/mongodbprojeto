import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; 
import { Link } from "react-router-dom";
import styles from './Posts.module.css';  // Importando o CSS modular

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  // Função para curtir o post e atualizar as curtidas no Firestore
  const handleLike = async (postId, currentLikes) => {
    const postRef = doc(db, "posts", postId);

    try {
      await updateDoc(postRef, {
        likes: currentLikes + 1, // Incrementa o número de curtidas
      });
    } catch (error) {
      console.error("Erro ao curtir o post: ", error);
    }
  };

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postContent}>{post.content}</p>
          <div>
            <button
              className={styles.likeButton}
              onClick={() => handleLike(post.id, post.likes || 0)}
            >
              Curtir ({post.likes || 0}) {/* Exibe o número de curtidas */}
            </button>
          </div>
          <Link to={`/comments/${post.id}`} className={styles.commentLink}>
            Comentários...
          </Link> {/* Link para a tela de comentários */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
