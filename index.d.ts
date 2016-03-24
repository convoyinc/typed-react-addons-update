declare module update {
  type PushCommand = {$push: any[]};
  type UnshiftCommand = {$unshift: any[]};
  type SpliceCommand = {$splice: any[][]};
  type SetCommand = {$set: any};
  type MergeCommand = {$merge: {}};
  type ApplyCommand = {$apply?: (value:any[]) => any};

  type ArrayCommand = PushCommand | UnshiftCommand | SpliceCommand | SetCommand | ApplyCommand;
  type ObjectCommand = SetCommand | MergeCommand | ApplyCommand;

  type SpecPath = {[key:string]: SpecPath | ArrayCommand | ObjectCommand};
  type ObjectSpec = ObjectCommand | SpecPath;
}

declare function update(value:any[], spec: update.ArrayCommand): any[];
declare function update(value:{}, spec: update.ObjectSpec): {};

export = update;
