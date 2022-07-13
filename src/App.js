import './App.css';
import ClassComp from './Components/ClassComponent';
import ConditionalRender from './Components/ConditionalRendering';
import DestructuringProps from './Components/destructuringProps';
import Submit from './Components/formSubmitData';
import FunctionalComp from './Components/FunctionalComponent';
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
    </>
  );
}

export default App;
