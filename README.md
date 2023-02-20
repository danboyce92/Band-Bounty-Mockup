# Band Bounty

## Band Bounty is a platform for crowd-sourced event organizing. It aims to give fans of music an opportunity to raise money for a concert from an artist of their choosing in their area.

### This website is not real and was solely created to add to my web-developer portfolio.

### How to install and run the project.

This project was created with create-react-app so after downloading the files and installing the dependencies you should be all good to go with npm start. The following dependencies are necessary for the project to function properly:

---

classnames </br>
firebase </br>
react-icons </br>
react-redux </br>
@reduxjs/toolkit </br>
react-router-dom </br>
react-tsparticles </br>
tsparticles </br>

---

if trying to run the project on your own device make sure you install all of them.

### Motivation for this project and what I have learned.

The main motivation for this project was to add something unique to my portfolio. I wanted everything in my portfolio to be mine and not a carbon copy of a tutorial.
The original intent for this project was to have web3 capabilities. I wanted the payment function to connect to a metamask wallet but decided to focus on the web2 fundamentals. Maybe I'll try to refactor it in the future.

Like all the projects I have worked through since I started, I have encountered a lot of unforseen issues that have been as equally painful as they have been rewarding after finally resolving them.
One of the biggest issues to stand out to me from this project has to be dealing with React state and async requests. Seeing a console.log populate a variable with data from my firebase database but the variable acts as though it was empty was a real head-scratcher.

This was my first project using redux toolkit. Although I still made use of state in some areas, I got a lot of practice using useDispatch and useSelector, the only thing I feel I was missing was making use of AsyncThunk. Involving async requests in my redux store will be a priority in my next project.

### Features I had hoped to implement

As mentioned previously, I had originally aimed at making this project on the blockchain. At present after you create an account and try to fund a bounty the only thing that happens is the bounty you tried to fund has it's total fund increase by $50. In my original plan it was to be connected to an Ethereum test-net and you could pay test-eth to fund them. In the end I decided it was better for me to spend some time in isolation focusing on the front-end web2 side of things before mixing it all up.
This led to learning a lot of the features available in firebase (which probably wouldn't be used in the web3 version)
