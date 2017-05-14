/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}
