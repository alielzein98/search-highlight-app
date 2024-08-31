import React, { useState } from 'react';

const articles = [
    {
      title: 'Understanding the difference between grid-template and grid-auto',
      date: 'Oct 09, 2018',
      content: `With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do...`
    },
    {
      title: 'Recreating the GitHub Contribution Graph with CSS Grid Layout',
      date: 'Sep 10, 2018',
      content: `The GitHub contribution graph is a unique design element that many developers are familiar with. It is a powerful way of visualizing the frequency of commits. This tutorial will show you how to recreate the contribution graph using CSS Grid Layout.`
    },
    {
      title: 'A Comprehensive Guide to Flexbox in CSS',
      date: 'Jan 15, 2019',
      content: `Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. This guide will help you understand how to use Flexbox to create responsive layouts.`
    },
    {
      title: 'CSS Grid vs. Flexbox: Which Should You Use?',
      date: 'Feb 20, 2019',
      content: `Both CSS Grid and Flexbox are powerful layout systems in CSS. This article compares the two and helps you decide which one to use for your web design projects. CSS Grid is generally better for creating 2D layouts, while Flexbox is better for 1D layouts.`
    },
    {
      title: 'An Introduction to Responsive Web Design',
      date: 'Mar 05, 2019',
      content: `Responsive web design is the practice of designing websites that work on multiple devices with different screen sizes. This article introduces the key concepts of responsive design, including fluid grids, flexible images, and media queries.`
    },
    {
      title: 'How to Build a Simple Website with HTML and CSS',
      date: 'Apr 12, 2019',
      content: `Building a simple website is a great way to start learning web development. This tutorial walks you through the basics of HTML and CSS, helping you build a basic website layout and style it using CSS.`
    },
    {
      title: 'The Evolution of Web Design: From Tables to CSS Grid',
      date: 'May 25, 2019',
      content: `Web design has come a long way since the early days of using tables for layout. This article explores the evolution of web design, from tables to floats, Flexbox, and finally to CSS Grid.`
    },
    {
      title: 'Creating Animations with CSS Keyframes',
      date: 'Jun 15, 2019',
      content: `CSS Keyframes allow you to create smooth animations by specifying the intermediate steps between the start and end of an animation. This guide shows you how to use keyframes to create engaging animations for your website.`
    },
    {
      title: 'Mastering Media Queries in CSS',
      date: 'Jul 20, 2019',
      content: `Media queries are a crucial part of responsive design, allowing you to apply different styles based on the screen size, orientation, and other characteristics of the user's device. This article covers the basics and advanced techniques of using media queries in CSS.`
    },
    {
      title: 'Advanced CSS Techniques for Modern Web Design',
      date: 'Aug 30, 2019',
      content: `This article covers advanced CSS techniques that can take your web design to the next level. Topics include CSS Grid, Flexbox, CSS Variables, and more, helping you create modern, responsive, and interactive web designs.`
    }
  ];
  

const SearchHighlight = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  };

  const filteredArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <p>{filteredArticles.length} posts were found.</p>
      {filteredArticles.map((article, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{getHighlightedText(article.title, searchTerm)}</h2>
          <small>{article.date}</small>
          <p>{getHighlightedText(article.content, searchTerm)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchHighlight;
