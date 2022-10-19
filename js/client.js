const bounce = anime({
	targets: '.ball',
	translateY: '300',
  direction: 'alternate',
	duration: 300,
	loop: true,
	easing: 'easeInCubic',
});