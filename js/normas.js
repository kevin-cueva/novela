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
	 
            't: A continuación los invito a seguir las indicaciones para apropiar los conocimientos en,',
            't: Normativa comercial, contable y financiera vigente y políticas contables.',
	 
                'hide character t normal with fadeOut',
		 
		  {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, constituida su empresa y teniendo en cuenta sus conocimientos previos,', 
		             't: seleccione el paso a seguir',
	         
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
		   
		   't: Querido Aprendiz, debes estudiar más',
		    
	       'end',
	           ],

	  
	  'Identificarlaestructuracontable': [
		  
	           'show background estructura at left with fadeIn',
		  
	           'show character t brava at center with fadeIn',
	     
	       't: Querido Aprendiz, debes estudiar más', 
		 
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
		  
               't: Una vez constituida su empresa el  paso a seguir es conocer la normativa comercial, contable y financiera vigente en Colombia',
               't: específicamente, todo lo referente a las NIIF, su objetivo e identificar el organismo emisor', 
               
		  
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, presiona el siguiente boton para continuar',
		  
		   'p5': {
	             'Text': 'Objetivo de las NIIF',
	             'Do': 'jump ObjetivodelasNIIF'
	           },	   	   
	       } 
	    },
		  
	       'end',
	           ], 	   
	
	  'Crearpoliticascontables':[
		  
		   'show background empresarial at left with fadeIn', 
	   
		   'show character t shock at center with fadeIn',
		
	       't: Querido aprendiz, debes estudiar más',
		  
		   'hide character t normal with fadeOut',
		  
		'end',
	            ],
		  
		  
	  'ObjetivodelasNIIF':[
		  
		  'show background internacional at left with fadeIn',
		  'show character t normal at center with fadeIn',
		  
	       't: Las NIIF tiene como objetivo, regular la preparación de información transparente y objetiva.',
	       't: Estas normas pretenden generar un lenguaje universal  comprensible, para las empresas nacionales e internacionales',
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, presiona el siguiente boton para continuar',
		  
		           
	           'p6': {
	             'Text': 'Cualidades de la información bajo NIIF',
	             'Do': 'jump CualidadesdelainformaciónbajoNIIF'
	           },	   	   
	       } 
	    },
		  
	       'end',
	            ],
		  
          'CualidadesdelainformaciónbajoNIIF':[
		  'show background internacional at left with fadeIn',
		   'show character t normal at center with fadeIn',
		  	  
	       't: En el marco de la normatividad internacional, se estableció 9 principios o cualidades básicas para la', 
	       't: información financiera presentada, las cuales se han dividido en dos secciones:',
		  
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, presiona el siguientes boton correspondiente a la sección 1',
		  
		   'p8': {
	             'Text': 'Cualidades primarias',
	             'Do': 'jump Cualidadesprimarias'
	            },          
	       } 
	    },
		  
	       'end',
	            ],
			  
	  'OrganismoemisordelasNIIF':[
		  'show background internacional at left with fadeIn',
		  'show character t feliz at center with fadeIn',
		  
	       't: Querido Aprendiz', 
	       't: La Junta de Normas Internacionales de Contabilidad, en ingles International Accounting Standards Board IASB,', 
	       't: es el organismo que emite dicho cuerpo de normas desde el año 2001',
		  
		   
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, constituida su empresa seleccione el paso a seguir',
	       
	           'p12': {
	             'Text': 'Marco Conceptual ',
	             'Do': 'jump MarcoConceptual'
	           },
	       } 
	    },    
		
	       'end',
	            ],
		  
	            
	 'Cualidadesprimarias':[
		 'show background internacional at left with fadeIn', 
		 
		 't: Comprensible: Cuando sea clara y fácil de entender',
		 't: Útil: Cuando además de confiable, la información sea pertinente y esté al día de forma oportuna',  
		 't: Confiable: Quiere decir que la información debe estar basada en hechos que se puedan comprobar y verificar',
		 't: Comparable: Cuando esté preparada sobre bases uniformes',
		 
		  {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, presiona el siguientes boton correspondiente a la sección 2',
	         
	           'p9': {
	             'Text': 'Cualidades secundarias',
	             'Do': 'jump Cualidadessecundarias'
	            }, 	    
	       } 
	    },
		  
	
	       'end',
	           ],
		  
	 'Cualidadessecundarias':[
		 'show background internacional at left with fadeIn',
		 
		 't: Materialidad: Un hecho económico es material  debido a las circunstancias que lo rodean, su naturaleza y cuantía,', 
		 't: Fidelidad representativa: Debe  existir una correspondencia entre las mediciones y', 
		 't: valuaciones contables realizadas y los hechos económicos que éstas representan',  
		 't: Revelación plena o completa: La información contable debe ser suministrada completamente,', 
		 't: ella debe dar cuenta en su totalidad de los hechos económicos registrados por el sistema contable',
		 't: Prudencia: Toda medición y registro de hechos económicos debe procurar no sobreestimar activos e ingresos,', 
		 't: ni subestimar pasivos y gastos',
		 't: Neutralidad: La información contable será fiable, si está libre de sesgo o perjuicio.',
		 
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, presiona el siguiente boton para continuar',
		  
		  'p7': {
	             'Text': 'Organismo emisor de las NIIF',
	             'Do': 'jump OrganismoemisordelasNIIF'
	           },         	   
	       } 
	    },
		
	       'end',
	            ],
	
	 'Estructuracontable': [
		 
		  't: Querido Aprendiz',
		  
		   'hide character t normal with fadeOut', 
		  
		   'show character t normal  at right', 
		  
               't: Una vez identificados los marco normativo contenidos en del DUR 2420/2015 específicamente los Grupo 1,2 y 3,',
               't: el paso a seguir es identificar la estructura contable aplicable a su empresa.',
               't: De acuerdo al proyecto formativo, usted debe tener como referencia el marco normativo',
               't: del grupo 2 normas NIIF para PYMES, por lo cual es necesario Identificar si su empresa cumple con los', 
               't: requisitos para ser catalogadas como pequeña y mediana empresa',
		 
		  {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, constituida su empresa seleccione el paso a seguir',
	         
		   'p11': {
	             'Text': 'Politicas contables',
	             'Do': 'jump Politicascontables'
	           },
	       } 
	    },    
		 
		 'end',
	           ],
	
	'Politicascontables': [
		
		'show background empresarial at left with fadeIn', 
	   
	        'show character t normal at right', 
		  
	       't: Estimado aprendiz,',
		  
               't: Ya tiene identificada la estructura contable de su  empresa,', 
	       't: el paso a seguir  es conocer las normas a tener en cuenta para la selección y',
	       't: aplicación de las políticas contables  conforme a los lineamientos de las NIIF para PYMES', 

		 'end',
	           ],
	
	 'MarcoConceptual': [
		 
		 'show background auditoria at left with fadeIn', 
		 
		  'show character t normal at at right', 
		 
	       't: Querido Aprendiz',
		   
               't: Ya usted posee el conocimiento necesario acerca de las Normas Internacionales de Información Financiera,', 
               't: el paso a seguir  es definir el marco conceptual contable y financiero aplicable a su empresa,',
               't: de acuerdo a actividad comercial, necesidades de la empresa y la normativa vigente',
		   
		   {
	       'Choice': {
	         
	           'Dialog': 't: Querido Aprendiz, constituida su empresa seleccione el paso a seguir',
	       
	           'p10': {
	             'Text': 'Estructura contable ',
	             'Do': 'jump Estructuracontable'
	           },
	       } 
	    },   
		 'end',
	           ],
	
	  
	});
	




