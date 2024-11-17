# Ensa Link

**Ensa Link** is a comprehensive social networking platform designed for the members of clubs at the National School of Applied Sciences of Safi (ENSAS). Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers a secure and feature-rich environment for interaction, collaboration, and community engagement.

## Features

- **User Roles**:  
  - **Administrators** manage the platform, communities, and moderators.  
  - **Moderators** oversee content moderation and manage community-specific tasks.  
  - **General Users** interact socially by posting, commenting, and joining communities.  

- **Automated Content Moderation**:  
  Utilizes NLP APIs like Perspective, TextRazor, and Hugging Face to filter inappropriate content (e.g., spam, toxicity).

- **Context-Based Authentication**:  
  Enhances account security by considering location, IP address, and device details.

- **Community Management**:  
  Users can join, interact with, or create communities while enjoying advanced features like content reporting and recommendation systems.

- **Real-Time Interactions**:  
  Engage with other users via likes, comments, and sharing posts.

## Tech Stack

- **Frontend**:  
  - React.js (with Redux)  
  - Tailwind CSS  

- **Backend**:  
  - Node.js (Express.js framework)  
  - JWT and Passport.js for authentication  
  - Nodemailer for email notifications  

- **Database**:  
  - MongoDB (NoSQL database)

- **Development Tools**:  
  - Visual Studio Code  
  - GitHub for version control  
  - Slack for team collaboration  

## Installation and Setup

To set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/ensa-link.git
   cd ensa-link
