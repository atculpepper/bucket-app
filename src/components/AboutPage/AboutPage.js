import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Bucket is an application that will help you to develop, store, and
        explore the Bucket List of experiences that you want to have within your
        lifetime. It was developed during a 2 week sprint while Anne Culpepper
        was a full stack student at Prime Digital Academy in Kansas City.
      </p>
    </div>
  </div>
);

export default AboutPage;
