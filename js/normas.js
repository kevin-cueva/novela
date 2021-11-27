monogatari.script ({

          'Start_Normas': [
	    
	        'show background global at left with fadeIn', 
	   
	        'show character t normal at left with fadeIn', 
	   
	    't: Estimado Aprendiz,',
	    
	    't: La globalización y el ritmo actual del mundo exigen, cada vez con mayor fuerza, un idioma universal,',
	    't: sobre todo en cuestiones de negocios y finanzas.', 
	    't: La información confiable y comparable en el ámbito financiero,', 
            't: es necesaria para que en las empresas se tomen las mejores decisiones.',
	 
	        'show character t feliz at center with fadeIn',
	 
            't: A continuación vamos a evaluar sus conocimientos en,',
            't: Normativa comercial, contable y financiera vigente y políticas contables.',
	 
                'hide character t normal with fadeOut', 
	    
	    {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, constituida su empresa seleccione el paso a seguir',
	         
	         
	           'p1': {
	             'Text': 'Definir marco conceptual aplicable',
	             'Do': 'jump Definirmarcoconceptualaplicable'
	           },
	         
	           'p2': {
	             'Text': 'Identificar la estructura contable ',
	             'Do': 'jump Identificarlaestructuracontable'
	           },
	         
	           'p3': {
	             'Text': 'Conocer normativa vigente',
	             'Do': 'jump Conocernormativavigente'
	           },
		    
		   'p4': {
	             'Text': 'Crear politicas contables',
	             'Do': 'jump Crearpoliticascontables'
	           },
	
	       } 
	    },    
	    
	            'end',
	  ],
	 
	      
	    
	   'Definirmarcoconceptualaplicable': [
		   
		   'show background auditoria at left with fadeIn', 
	   
	           'show character t brava at center with fadeIn',
	     
	       't: Querido Aprendiz',
		   
		   'hide character t normal with fadeOut', 
		   
		   'show character t normal at at right', 
		   
               't: Ya usted posee el conocimiento necesario acerca de las Normas Internacionales de Información Financiera,', 
               't: el siguiente paso es definir el marco conceptual contable y financiero aplicable a su empresa,',
               't: de acuerdo a actividad comercial, necesidades de la empresa y la normativa vigente',
		 
	       'end',
	           ],

	  
	  'Identificarlaestructuracontable': [
		  
	           'show background estructura at left with fadeIn',
		  
	           'show character t brava at center with fadeIn',
	     
	       't: Querido Aprendiz',
		  
		   'hide character t normal with fadeOut', 
		  
		   'show character t normal  at right', 
		  
               't: Una vez identificados los marco normativo contenidos en del DUR 2420/2015 específicamente los Grupo 1,2 y 3,',
               't: el siguiente paso es identificar la estructura contable aplicable a su empresa.',
               't: De acuerdo al proyecto formativo, usted debe tener como referencia el marco normativo',
               't: del grupo 2 normas NIIF para PYMES, por lo cual es necesario Identificar si su empresa cumple con los', 
               't: requisitos para ser catalogadas como pequeña y mediana empresa',
		  
	       'end',
	           ], 
	  
	  'Conocernormativavigente': [
		  
		  'show background internacional at left with fadeIn', 
	   
	          'show character t feliz at center with fadeIn',
	     
	      't: Querido Aprendiz',
		  
		   
               't: Las Normas Internacionales de Información Financiera constituyen el conjunto de normas contables,',
               't: con mayor aceptación a nivel mundial, su objetivo es regular la preparación de información transparente y objetiva.',
               't: estas normas pretenden generar un lenguaje universal y comprensible para las empresas nacionales e internacionales',

	      'show background decisiones at left with fadeIn',
		  
               't: Una vez constituida su empresa el siguiente paso es conocer la normativa comercial, contable y',
               't: financiera vigente en Colombia específicamente, todo lo referente a las NIIF', 
               't: su objetivo e identificar el organismo emisor',
		   
	       'end',
	           ], 
	
	  'Crearpoliticascontables':[
		  
		   'show background empresarial at left with fadeIn', 
	   
		   'show character t brava at center with fadeIn',
		
	       't: Estimado aprendiz,',
		  
		   'hide character t normal with fadeOut',
		  
		   'show character t normal at right', 
		  
               't: Ya tiene identificada la estructura contable de su  empresa,', 
	       't: el siguiente paso es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES', 

	    
		'end',
	            ],
		
	 
	  
	});
	


