# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). 

Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my first challenge on Frontend Mentor and I am eager to submit it.
In order to complete it, I required more than five days. This delay was mainly due to job and constant life tasks. However, it was extremely useful to determine how to operate when developing, the work speed and the constant research for information.

### Screenshot

<p align="center">
  <img src="./screenshot.png" alt=""/>
</p>

<p align="center">
  <img src="./screenshot-mobile.png" alt=""/>
</p>
<!-- Old screenshot version:
![](./screenshot.png) -->

### Links

- Solution URL: [Github (this page)](https://github.com/gabriel-iturra/gidev.github.io/tree/main/Frontend%20Mentor%20Challenges/QR%20code%20component/qr-code-component-main)
- Live Site URL: [Live site link](https://gabriel-iturra.github.io/gidev.github.io/Frontend%20Mentor%20Challenges/QR%20code%20component/qr-code-component-main/index.html)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap 5.3 (Flex, custom properties)

## What I learned

I was able to put into use many CSS functions and options I wanted to use, such as viewport units, Clamp and Flex.
Clamp is amazing, but tricky to use if viewport units are not well understood. And perhaps there are better solutions.
Also, Flex requires understanding before it can be used as a powerful tool to responsiveness.
I learned that having a different CSS file to use to create custom classes for Bootstrap can help a ton when changing the Bootstrap version in the future.

```css
.container {
    height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```
Having a separate Container wrapping the Card Container with the aforementioned CSS code helped make it responsive.

### Continued development

It would be ideal to: 
- Use Flex and its sub-properties often in many different  scenarios.
- Use Tailwind as an alternative to Bootstrap to familiarize with it.
- To avoid using media queries as much as possible: ideally as a last resort.

## Useful resources

- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - This article helped me a lot when using Flex. Well explained and with interactive examples on how Flex works.
- [Ahmad Shadeed - CSS Viewport Units](https://ishadeed.com/article/viewport-units/) - Amazing article about Viewport Units: how they work, values you can use, and more.
- [Adrian Bece - Modern Fluid Typography Using CSS Clamp](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/) - This article helped getting a responsive typography, with Clamp examples.

## Author

- LinkedIn - [Gabriel Iturra](https://www.linkedin.com/in/gabriel-iturra/)
- Frontend Mentor - [@gabriel-iturra](https://www.frontendmentor.io/profile/gabriel-iturra)

## Acknowledgments

To the amazing Frontend Mentor community for their constant assistance, and helping people thrive with their Frontend Development goals.