# Add a back to top button

# Add animate on scroll to home page sections

# Implement dark mode switch

## Add imagemin-webpack-avif-plugin eventually

Once the support for AVIF image format is more than [69%](https://caniuse.com/avif)
then add it in. It reduces file size greatly.

# ScrollAnimation

## Need to extract it into an npm module and post it on my repository for mini project

IDK about the stuff below, need to test it with multiple observed scroll animations

Can add the animationOut by toggling a boolean value with the "isIntersecting" property.

It will initally be false, then true once scrolled into view (isIntersecting = true),
then when it scrolls to where the threshold is now for exiting the viewport,
(isIntersecting = false) can toggle an "animateOut" class.