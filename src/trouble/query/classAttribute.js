import Types from './../utils/types';
const members = {

  setClass(options) {

    if (Types.isString(options)) {

      this.setAttribute('class', options);
    } else if (options instanceof Array) {

      let classNames = [];
      options.map(el => {
        if (Types.isString(el)) {
          classNames.push(el)
        } else if (Types.isObject(el)) {

          for (let key in el) {

            let value = el[key];
            if (Types.isString(value)) {
              classNames.push(value)
            } else if (Types.isBoolean(value)) {
              if (value) {
                classNames.push(key)
              }
            } else {
              if (value) {
                classNames.push(key)

              }
            }
          }
        }

      })

      this.setAttribute('class', classNames)
    }

  },
  addClass(name) {

    let className = this.getClass();
    className = className.replace(new RegExp(name, 'gi'), '');
    className += ` ${name}`;
    this.setClass(className);

  },
  getClass() {

    return this.getAttribute('class')
  }
}

export default members;