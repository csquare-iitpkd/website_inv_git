import React, { useEffect } from 'react'; // Import useEffect
import '../styles/news_updates.css';

const posts = [
  {
    title: 'Changelog for 2024',
    description: 'Explore the latest updates and enhancements in our 2024 changelog. Discover new latest updates and enhancements in our 2024 changelog.',
    date: 'January 01, 2021',
  },
  {
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to understanding and using React Hooks in your projects.',
    date: 'February 15, 2021',
  },
  {
    title: 'CSS Grid Layout',
    description: 'Learn how to create complex layouts easily with CSS Grid.',
    date: 'March 10, 2021',
  },
];

const NewsAndUpdates = () => {
  // useEffect(() => {
  //   const container = document.querySelector('.news-container');

  //   for (let i = 0; i < 100; i++) {
  //     const particle = document.createElement('div');
  //     particle.classList.add('particle');

  //     const randomX = Math.random() * window.innerWidth;
  //     const randomY = Math.random() * window.innerHeight;
  //     particle.style.left = `${randomX}px`;
  //     particle.style.top = `${randomY}px`;

  //     container.appendChild(particle);
  //   }
  // }, []);


    return (
        <div className="news-container px-4 sm:px-6 lg:px-8">
            <div className='news-content text-center lg:text-left'>
                <h2 className="news-heading text-3xl sm:text-4xl lg:text-5xl">News & Updates</h2>
                <p className="text-base sm:text-lg lg:text-xl">The latest news and updates</p>
                
            </div>
          <div className="posts-container flex-col lg:flex-row gap-4 lg:gap-8 xl:gap-12">
            <div className='left w-full lg:w-1/2 flex justify-center lg:justify-start'>
              <video 
                className="w-full h-auto rounded-lg shadow-lg"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="assets/Innovation_lab.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='right w-full lg:w-1/2 space-y-4'>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post">
                  <h3 className="post-title text-lg sm:text-xl">{post.title}</h3>
                  <p className="post-description text-sm sm:text-base">{post.description}</p>
                  <p className="post-date text-xs sm:text-sm">{post.date}</p>
                </div>
              ))
            ) : (
              <p className="text-center lg:text-left">No posts available</p>
            )}
            </div>
       
          </div>
        </div>
      );
    };
    
    export default NewsAndUpdates;