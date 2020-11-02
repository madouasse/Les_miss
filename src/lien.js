function lien() {
    var mapp = document.querySelector("#map")
    console.log('Hola Before !', mapp)
    /*var mappa = mapp.querySelectorAll("div")
    console.log('Hola Before !', mappa)

    var mappy = mapp.querySelectorAll("#map")
    console.log('Hola Before !', mappy)
*/
    var paths = document.querySelectorAll('.map__image')
    console.log('Hola Before !', paths)
  
    paths.forEach(function (path) {
      ReactDOM.findDOMNode('onMouseEnter', function (e) {
        console.log('Hola !')
        }
    )
      })
  };
  export default lien;