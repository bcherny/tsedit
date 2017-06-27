import { ModuleKind, transpileModule } from 'typescript'

export function compile(ts: string) {
  return transpileModule(ts, {
    compilerOptions: {
      module: ModuleKind.None
    }
  }).outputText
}
