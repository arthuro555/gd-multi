gdjs.SceneCode = {};
gdjs.SceneCode.GDFireObjects1= [];
gdjs.SceneCode.GDFireObjects2= [];
gdjs.SceneCode.GDSmokeObjects1= [];
gdjs.SceneCode.GDSmokeObjects2= [];
gdjs.SceneCode.GDParticlesObjects1= [];
gdjs.SceneCode.GDParticlesObjects2= [];
gdjs.SceneCode.GDBeamObjects1= [];
gdjs.SceneCode.GDBeamObjects2= [];
gdjs.SceneCode.GDBeam2Objects1= [];
gdjs.SceneCode.GDBeam2Objects2= [];
gdjs.SceneCode.GDPyroObjects1= [];
gdjs.SceneCode.GDPyroObjects2= [];

gdjs.SceneCode.conditionTrue_0 = {val:false};
gdjs.SceneCode.condition0IsTrue_0 = {val:false};
gdjs.SceneCode.condition1IsTrue_0 = {val:false};


gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPyroObjects1Objects = Hashtable.newFrom({"Pyro": gdjs.SceneCode.GDPyroObjects1});gdjs.SceneCode.eventsList0x5b7a48 = function(runtimeScene) {

{


gdjs.SceneCode.condition0IsTrue_0.val = false;
{
gdjs.SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Creating");
}if (gdjs.SceneCode.condition0IsTrue_0.val) {
gdjs.SceneCode.GDPyroObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SceneCode.mapOfGDgdjs_46SceneCode_46GDPyroObjects1Objects, 350 + gdjs.random(100), 100 + gdjs.random(300), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Creating");
}}

}


}; //End of gdjs.SceneCode.eventsList0x5b7a48


gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDFireObjects1.length = 0;
gdjs.SceneCode.GDFireObjects2.length = 0;
gdjs.SceneCode.GDSmokeObjects1.length = 0;
gdjs.SceneCode.GDSmokeObjects2.length = 0;
gdjs.SceneCode.GDParticlesObjects1.length = 0;
gdjs.SceneCode.GDParticlesObjects2.length = 0;
gdjs.SceneCode.GDBeamObjects1.length = 0;
gdjs.SceneCode.GDBeamObjects2.length = 0;
gdjs.SceneCode.GDBeam2Objects1.length = 0;
gdjs.SceneCode.GDBeam2Objects2.length = 0;
gdjs.SceneCode.GDPyroObjects1.length = 0;
gdjs.SceneCode.GDPyroObjects2.length = 0;

gdjs.SceneCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['SceneCode'] = gdjs.SceneCode;
