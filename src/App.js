import './App.css';
import ClassComp from './Components/ClassComponent';
import ConditionalRender from './Components/ConditionalRendering';
import DestructuringProps from './Components/destructuringProps';
import MultipleInputs from './Components/FormHandling/multipleInputs';
import Submit from './Components/formSubmitData';
import FunctionalComp from './Components/FunctionalComponent';
import UseReducer from './Components/Hooks/UseReducer';
import Methods from './Components/LifeCycleMethod/Methods';
import ListRendering from './Components/ListRendering';
import PassFunAsProps from './Components/PassFunAsProps';
import UseEffectHook from './Components/UseEffectHook';
import UseStateHook from './Components/UseStateHook';

function App() {
  return (
    <>
    <FunctionalComp/>
    <ClassComp/>
    <UseStateHook/>
    <UseEffectHook/>
    <ConditionalRender/>
    <DestructuringProps title = "heading" subTitle = "paragraph" details ="click on the link"/>
    <Submit/>
    <PassFunAsProps/>
    <ListRendering/>
    <MultipleInputs/>
    <Methods/>
    <UseReducer/>
    </>
  );
}

export default App;
