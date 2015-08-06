Meteor.startup(function() {

  CodeVersions.remove({Version: '0.12'});
  
  if (CodeVersions.find({Version: '0.12'}).count() === 0) {    
    CodeVersions.insert({
      Version: '0.12',
      Type: 'info',
      Icon: 'user',
      Title: 'Gestión de usaurios',
      Creation: new Date(2015, 8, 9, 12, 00, 0, 0),
      Users: [
        {Name:'DRNachio', Email:'nacho@binpar.com'}
      ],
      Description:'<p>Se incorpora la funcionalidad de gestión de usaurios y roles.</p>',
      Details:    '<p>Tras la versión <strong>0.11</strong> identifico muchos problemas de base con el desarrollo en <a href="http://www.meteor.com">Meteor</a>, realizo el tutorial de <a href="http://es.discovermeteor.com/">discovermeteor.com</a> y re-estudio la <a href="http://docs.meteor.com/#/full/">documentación</a> para mejorar mi dominio de la plataforma.</p>' +
                  '<p>El <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://differential.com/">Diferencial</a> ha acelerado el proceso, pero tengo la sensación de no controlar los entresijos de como esta funcionando (como si llegase a un proyecto ya construido sin conocerlo).</p>'+
                  '<p>Se añade también la explicación sobre <a href="#tecnologiasReactivas">tecnologías reactivas</a> así como el ejemplo páctico basado en <strong>los logros más valorados</strong>.</p>'
    });
  }

  if (CodeVersions.find({Version: '0.11'}).count() === 0) {    
    CodeVersions.insert({
      Version: '0.11',
      Type: 'info',
      Icon: 'calendar',
      Title: 'Historial de versiones del sistema',
      Creation: new Date(2015, 8, 6, 9, 57, 0, 0),
      Users: [
        {Name:'DRNachio', Email:'nacho@binpar.com'}
      ],
      Description:'<p>Esto que estas viendo (el historial de versiones del sistema), fue añadido en esta fase como modelo inicial para la conexión con la BBDDs de <a href="https://www.mongodb.org/">MongoDB</a>.</p>',
      Details:    '<p>En esta versión he tenido muchísimos problemas para identificar donde se ejecuta cada parte: Cliente / Servidor / Ambos.</p>' +
                  '<p>Añadida la funcionalidad de crear un usuario por defecto.</p>' +
                  '<p>Añadido el sistema interno de perfiles.</p>' +
                  '<p>Por el momento me parece más claro el sistema estándar de <a href="http://www.meteor.com/">Meteor</a>  que el <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://differential.com/">Diferencial</a>.</p>' +
                  '<p>Se añade la licencia <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.</p>'+
                  '<p>Temas pendientes:</p>' + 
                  '<ul><li>Encontrar el modo de publicar una <strong>collection</strong> en un <strong>template</strong> sin tocar el <strong>controller</strong>.</li></ul>'

    });
  }

  if (CodeVersions.find({Version: '0.01'}).count() === 0) {    
    CodeVersions.insert({
      Version: '0.01',
      Type: 'success',
      Icon: 'home',
      Title: 'Se inicia el proyecto de desarrollo',
      Creation: new Date(2015, 8, 5, 16, 33, 0, 0),
      Users: [
        {Name:'DRNachio', Email:'nacho@binpar.com'}
      ],
      Description: '<p>Con más miedo que vergüenza (sobre todo debido a la cantidad de tecnologías nuevas aplicadas) inicio el desarrollo de Bi-Productive.</p>',
      Details:    '<p>Lo creo como un proyecto de código abierto (por si alguna otra empresa pudiera necesitarlo), aunque en las fases iniciales se centrará en las necesidades de producción de <a href="http://www.binpar.com">BinPar</a>.</p>' +
                  '<p>Esta primera versión pone el foco en evolucionar el <a href="http://github.differential.com/meteor-boilerplate/">Boilerplate</a> de <a href="http://www.meteor.com/">Meteor</a> desarrollado por <a href="http://differential.com/">Diferencial</a> incorporando las necesidades básicas de BinPar.</p>' +
                  '<p>El estilo visual estará absolutamente basado en la vestión <a href="http://lesscss.org/">less</a> de <a href="http://getbootstrap.com/">Boostrap</a> y, de cara a permitir su personalización a futuro para otras empresas y para no necesitar adaptarlo a futuras versiones de <a href="http://getbootstrap.com/">Boostrap</a> ha sido personalizado ajustando las variables less definidas para este proposito mediante <a href="http://bootstrap-live-customizer.com/">Boostrap Live Customizer</a>.</p>'
    });    
  }
});