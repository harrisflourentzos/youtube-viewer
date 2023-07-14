# Youtube Viewer

## Overview

This project is a solution to a coding exercise during an interview stage. It will be extended in the future to become a full youtube clone with additional functionality.

## How to run

1. Download the code locally and navigate to the root directory.

2. Install dependencies.

   `npm install`

3. Add a <b>.env</b> file in the root directory and add the following line.

   `REACT_APP_YOUTUBE_API_V3_KEY=*************************`

   A valid api key can be aquired by: https://developers.google.com/youtube

4. Run the app

   `npm start`

## Solution

- Solution was created using `create-react-app`. I think it was adequate for the purposes of the exercise but I would upgrade to NextJS if this becomes a larger project.
- I have somewhat deviaded from the structure implied by the starting project. The reason for that was to allow me to implement routing, showcase more React features and provide a more realistic scenario for a production ready app. The <b>VideoDetailsPage</b> is essentially where the new feature requirement of loading comments was implemented.
- I have chosen to remove the "load data as you type" functionality. In that I have removed lodash used to throttle user input.
- The youtubeApi was built from scratch for the purposes of the excersise. Normally you would use an excisting, well supported npm package (Ideally youtube's official one but it's still in alpha).
- <b>Subscriptions</b>, <b>History</b> and <b>Library</b> are left as invalid paths to showcase the Error page. They would not be otherwise included in a production release.

## Improvements and Limitations

For all project roadmap see the <b>Issues</b> section of the repo on GitHub.

### Code base

- Add tests
- Optimize useEffect and data loading

### Enhancements

- Add user authentication
- Add Pagination
- Also load comment replies
- Add AI functionality (see more details in github issues)
- Optimise more for mobile
- Upgrade project to NextJS

### Issues

- Repeatedly hitting sidebar items breaks sidebar selection bug
- Error page should be rendered within the Layout page bug
