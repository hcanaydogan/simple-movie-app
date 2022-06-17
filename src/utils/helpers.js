function debounce(func, threshold, execAsap) {
  let timeout;

  return function debounced() {
    const obj = this, args = arguments;

    function delayed() {
      if (!execAsap) func.apply(obj, args);
      timeout = null;
    }

    if (timeout) clearTimeout(timeout);
    else if (execAsap) func.apply(obj, args);

    timeout = setTimeout(delayed, threshold || 100);
  };
}

export {debounce};