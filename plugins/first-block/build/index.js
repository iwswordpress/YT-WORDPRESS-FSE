!function(){"use strict";var e=window.wp.element;wp.blocks.registerBlockType("ourblocktheme/first-block",{title:"First Block",icon:{src:"admin-settings",background:"#006400",foreground:"#fff"},category:"text",attributes:{valueOne:{type:"string"},valueTwo:{type:"string"}},edit:function(t){return(0,e.createElement)("div",null,(0,e.createElement)("input",{type:"text",placeholder:"value one...",value:t.attributes.valueOne,onChange:function(e){t.setAttributes({valueOne:e.target.value})}}),(0,e.createElement)("input",{type:"text",placeholder:"value two..",value:t.attributes.valueTwo,onChange:function(e){t.setAttributes({valueTwo:e.target.value})}}))},save:function(e){return null}})}();