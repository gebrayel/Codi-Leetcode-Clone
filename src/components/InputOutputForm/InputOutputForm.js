import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import colors from "../../config/colors/colors";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

const InputOutputForm = (InputOutputFunction) => {
    const {inputOutputs,agregarInputOutput}=InputOutputFunction;
    const classes=useStyles();
    
    //Crear State de InputOutput
    const [InputOutput, setInputOutput]=useState({
        input:'',
        output:'',
    });
    
    //Extraer los valores con Destructuring
    const {input,output}=InputOutput;
    
    //Funcion que se ejecuta cada que el usuario escribe en un TextField
    const onChange= evento =>{
        setInputOutput({
            ...InputOutput, 
            [evento.target.name] : evento.target.value
        })
    }
    const submitInputOutput = () => {

        // Validar
        if(input.trim().replace("\n","") === ''){
            alert("La informacion del input para el problema no puede estar vacia.")
            return;
        }
        if( output.trim().replace("\n","")===''){
            alert("La informacion del output para el problema no puede estar vacia.")
            return;
        }

        //Inicializar el id del InputOutput
        InputOutput.id=inputOutputs.length+1;

        //Crear el inputOutput
        agregarInputOutput(InputOutput);

        // Reiniciar State
        setInputOutput({
            input:"",
            output:""
        })


    }
    function InputOutputAddButton(){
        return(
        <Button 
                size="small"
                variant="contained" 
                className={classes.ButtonAdd__ProblemTab3}
                onClick={()=> submitInputOutput()}>
                Añadir<AddIcon className={classes.addIcon}/>
        </Button> 
        )
    }

    return ( 
        <div id="TextFieldBox__InputOutputFormTab3" >
          <h2 >Agregue un Caso de Prueba:</h2>
          
        <Grid
            direction="row"
            justify="center"
            alignItems="center" 
            container
            xs={12} 
            md={12} 
            lg={12} 
            spacing={0}
        >
          <Paper className={classes.paperContainer}>
            <Grid 
                  classsName={classes.backgroundColorContainer}
                  direction="row"
                  justify="center"
                  alignItems="center" 
                  container 
                  spacing={0}
                  >       
              <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center" 
                    className={classes.itemStles } 
                    xs={12} 
                    md={12} 
                    lg={8} 
                    spacing={0}>
                <React.Fragment>
                        <Grid item={true} xs={12} md={1} lg={2} xl={1}>
                        <h4 className={classes.titleTextField}>Input:</h4>
                        </Grid>
                        <Grid item={true} xs={8} md={3} lg={4} xl={3}>
                        <TextField
                                    className={`
                                    ${classes.whiteTheme} 
                                    ${classes.TextField__Tab3}
                                                `
                                            }
                                    name="input"
                                    onChange={onChange}
                                    value={input}
                        >

                        </TextField>
                        </Grid>
                        <Grid item={true} xs={12} md={1} lg={2} xl={1}>
                        <h4 className={classes.titleTextField} >Output:</h4>
                        </Grid>
                        <Grid item={true} xs={8} md={3} lg={4} xl={3}>
                        <TextField
                                    className={`
                                                ${classes.whiteTheme} 
                                                ${classes.TextField__Tab3}
                                                `
                                            }
                                    name="output"
                                    onChange={onChange}
                                    value={output}
                        >
                        </TextField>
                        </Grid>
                        <Grid  item={true} xs={8} md={2} lg={3} xl={2}>
                        <Paper className={`
                                            ${classes.paper}
                                            ${classes.itemStles}
                                            ` }
                        >
                                <InputOutputAddButton/>                                    
                        </Paper>
                        </Grid>
                    </React.Fragment>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        </div> 
     );
}
 
export default InputOutputForm;


const useStyles = makeStyles((theme) => ({
  root: {
    width:"100%",
  },
  addIcon:{
    marginLeft:"5%",
    marginBottom:"3%"
  },
  ButtonAdd__ProblemTab3:{
    marginTop:"5%"
  },
  backgroundColorContainer:{
      "& .MuiGrid-container":{
        backgroundColor:colors.background,
          
      }
  },
  itemStles:{
    "& .MuiPaper-elevation1":{
        boxShadow:"none",
        borderRadius:"none",
        overflowX:"hidden",
    }
  },
  TextField__Tab3:{
    textAlign:"left",
    overflowX: "auto",
    paddingTop:"5%"
  },
  paperContainer:{
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: colors.background,
    color:colors.white,
    width:"100%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent:"center",
    backgroundColor: colors.background,
    color:colors.white,
    marginLeft:"0%",
    
  },
   whiteTheme: {
    "& .MuiSelect-icon":{
      color:"white",
      height:"80%",
     },
    
    "& .MuiInputLabel-formControl":{
        color:"white"
    },
      "& .MuiInputBase-root ": {
        color: colors.white,  
    },
      "& .MuiInputBase-input .MuiInput-input": {
        color: colors.white,
    },
      "& .MuiInput-underline:before": {
        borderColor: colors.white,
        borderWidth: "0.2rem",
        borderBottom: "0.2rem solid white",
    },
      "& .MuiInput-underline:after": {
        borderColor: colors.white,
        borderWidth: "0.2rem",
        borderBottom: "0.2rem solid white",
    },
  }
}));