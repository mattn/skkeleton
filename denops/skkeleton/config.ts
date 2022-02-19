import {
  ensureBoolean,
  ensureNumber,
  ensureString,
} from "./deps/unknownutil.ts";
import { Encode, Encoding } from "./types.ts";

export const config = {
  acceptIllegalResult: false,
  debug: false,
  eggLikeNewline: false,
  globalJisyo: "/usr/share/skk/SKK-JISYO.L",
  globalJisyoEncoding: "euc-jp",
  immediatelyCancel: true,
  immediatelyJisyoRW: true,
  kanaTable: "rom",
  keepState: false,
  registerConvertResult: false,
  selectCandidateKeys: "asdfjkl",
  setUndoPoint: true,
  showCandidatesCount: 4,
  tabCompletion: true,
  usePopup: true,
  userJisyo: "~/.skkeleton",
  markerHenkan: "▽",
  markerHenkanSelect: "▼",
  useSkkServer: false,
  skkServerHost: "127.0.0.1",
  skkServerPort: 1178,
  skkServerResEnc: "euc-jp" as Encoding,
  skkServerReqEnc: "euc-jp" as Encoding,
};

type Validators = {
  [P in keyof typeof config]: (x: unknown) => asserts x is typeof config[P];
};

const validators: Validators = {
  acceptIllegalResult: ensureBoolean,
  debug: ensureBoolean,
  eggLikeNewline: ensureBoolean,
  globalJisyo: ensureString,
  globalJisyoEncoding: ensureString,
  immediatelyCancel: ensureBoolean,
  immediatelyJisyoRW: ensureBoolean,
  registerConvertResult: ensureBoolean,
  selectCandidateKeys: (x): asserts x is string => {
    ensureString(x);
    if (x.length !== 7) {
      throw TypeError("selectCandidateKeys.length !== 7");
    }
  },
  kanaTable: ensureString,
  keepState: ensureBoolean,
  setUndoPoint: ensureBoolean,
  showCandidatesCount: ensureNumber,
  tabCompletion: ensureBoolean,
  usePopup: ensureBoolean,
  userJisyo: ensureString,
  markerHenkan: ensureString,
  markerHenkanSelect: ensureString,
  useSkkServer: ensureBoolean,
  skkServerHost: ensureString,
  skkServerPort: ensureNumber,
  skkServerResEnc: (x): asserts x is Encoding => {
    ensureString(x);
    if (!(x in Encode)) {
      throw TypeError(`${x} is invalid encoding`);
    }
  },
  skkServerReqEnc: (x): asserts x is Encoding => {
    ensureString(x);
    if (!(x in Encode)) {
      throw TypeError(`${x} is invalid encoding`);
    }
  },
};

export function setConfig(newConfig: Record<string, unknown>) {
  const cfg = config as Record<string, unknown>;
  const val = validators as Record<string, (x: unknown) => void>;
  if (config.debug) {
    console.log("skkeleton: new config");
    console.log(newConfig);
  }
  for (const k in newConfig) {
    try {
      if (val[k]) {
        val[k](newConfig[k]);
        cfg[k] = newConfig[k];
      } else {
        throw TypeError(`unknown option: ${k}`);
      }
    } catch (e) {
      throw Error(`Illegal option detected: ${e}`);
    }
  }
}
