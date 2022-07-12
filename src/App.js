import './App.css';
import ClassComp from './Components/ClassComponent';
import ConditionalRender from './Components/ConditionalRendering';
import DestructuringProps from './Components/destructuringProps';
import FunctionalComp from './Components/FunctionalComponent';
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
    </>
  );
}

export default App;
