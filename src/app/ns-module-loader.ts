import {
    Injectable,
    NgModuleFactoryLoader,
    Compiler,
    NgModuleFactory,
} from "@angular/core";

const _SEPARATOR = "#";
declare var System: any;

@Injectable()
export class NativeScriptNgModuleLoader implements NgModuleFactoryLoader {
    constructor(private _compiler: Compiler) {
    }

    load(path: string): Promise<NgModuleFactory<any>> {
        const offlineMode = this._compiler instanceof Compiler;
        if (offlineMode) {
            throw new Error(`This is a demo loader! AoT mode is not supported!`);
        }

        return this.loadAndCompile(path);
    }

    private loadAndCompile(path: string): Promise<NgModuleFactory<any>> {
        let [module, exportName] = path.split(_SEPARATOR);
        if (exportName === undefined) {
            exportName = 'default';
        }

        return System.import(module)
            .then((module: any) => module[exportName])
            .then((type: any) => this._compiler.compileModuleAsync(type));
    }
}

