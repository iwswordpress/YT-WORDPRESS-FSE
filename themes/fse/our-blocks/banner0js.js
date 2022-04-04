wp.blocks.registerBlockType("ourblocktheme/banner", {
  title: "Banner",
  icon:{
    "src":"smiley",
    "background": "#2196f3",
    "foreground": "#fff"
  },
  category: "text",
  attributes: {
    skyColor: {type: "string", default: "blue"},
    grassColor: {type: "string", default: "green"}
  },
  edit: EditComponent,
  save: SaveComponent
})

function EditComponent(props) {
  return  ( <div style={{background:'linen', height: '100px', padding:'20px', border: '2px solid black', borderRadius:'20px' }}> <h1 style={{color:'red'}}>EDITOR - This is from our block.</h1></div> )
}

function SaveComponent(props) {
  return null
}
 