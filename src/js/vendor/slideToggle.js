/**
 * Slide an element down like jQuery's slideDown function using CSS3 transitions.
 * @see https://gist.github.com/ludder/4226288
 * @param  {element}  el
 * @param  {string}   timing
 * @return {void}
 */
function slideDown(el, timing) {
  timing = timing || '300ms ease';

  // Get element height
  el.style.webkitTransition = 'initial';
  el.style.transition = 'initial';
  el.style.visibility = 'hidden';
  el.style.maxHeight = 'initial';
  var height = el.offsetHeight + 'px';
  el.style.removeProperty('visibility');
  el.style.maxHeight = '0';
  el.style.overflow = 'hidden';

  // Begin transition
  el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
  el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
  var endSlideDown = function() {
    el.style.removeProperty('-webkit-transition');
    el.style.removeProperty('transition');
    el.style.removeProperty('opacity');
    el.removeEventListener('transitionend', endSlideDown);
  };
  requestAnimationFrame(function() {
    el.addEventListener('transitionend', endSlideDown);
    el.style.maxHeight = height;
    el.style.opacity = '1';
  });
}

/**
 * Slide an element up like jQuery's slideUp function using CSS3 transitions.
 * @see https://gist.github.com/ludder/4226288
 * @param  {element}  el
 * @param  {string}   timing
 * @return {void}
 */
function slideUp(el, timing) {
  timing = timing || '300ms ease';

  // Get element height
  el.style.webkitTransition = 'initial';
  el.style.transition = 'initial';
  var height = el.offsetHeight + 'px';
  el.style.maxHeight = height;
  el.style.overflow = 'hidden';

  // Begin transition
  el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
  el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
  var endSlideDown = function() {
    el.style.removeProperty('-webkit-transition');
    el.style.removeProperty('transition');
    el.style.removeProperty('opacity');
    el.removeEventListener('transitionend', endSlideDown);
  };
  requestAnimationFrame(function() {
    el.addEventListener('transitionend', endSlideDown);
    el.style.maxHeight = '0';
    el.style.opacity = '0';
  });
}
