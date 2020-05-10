import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Bucket is an application that was developed during a 2 week sprint. It
        is Anne Culpepper's solo project for Prime Digital Academy coursework in
        Kansas City.
      </p>
    </div>
  </div>
);

export default AboutPage;
