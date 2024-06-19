/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** 定义枚举类型 CameraType */
export enum CameraType {
  Front = 0,
  Back = 1,
  UNRECOGNIZED = -1,
}

export function cameraTypeFromJSON(object: any): CameraType {
  switch (object) {
    case 0:
    case "Front":
      return CameraType.Front;
    case 1:
    case "Back":
      return CameraType.Back;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CameraType.UNRECOGNIZED;
  }
}

export function cameraTypeToJSON(object: CameraType): string {
  switch (object) {
    case CameraType.Front:
      return "Front";
    case CameraType.Back:
      return "Back";
    case CameraType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** 定义枚举类型 StageType */
export enum StageType {
  Start = 0,
  End = 1,
  UNRECOGNIZED = -1,
}

export function stageTypeFromJSON(object: any): StageType {
  switch (object) {
    case 0:
    case "Start":
      return StageType.Start;
    case 1:
    case "End":
      return StageType.End;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StageType.UNRECOGNIZED;
  }
}

export function stageTypeToJSON(object: StageType): string {
  switch (object) {
    case StageType.Start:
      return "Start";
    case StageType.End:
      return "End";
    case StageType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MetaData {
  width: number;
  height: number;
}

export interface EnvImage {
  /** 使用bytes类型存储ArrayBuffer，如果拿不到照片流则设一个空的Buffer */
  file: Uint8Array;
  /** 使用枚举类型CameraType */
  type: CameraType;
  /** 使用枚举类型StageType */
  stage: StageType;
  /** 存储图像的元数据 */
  meta: MetaData | undefined;
}

function createBaseMetaData(): MetaData {
  return { width: 0, height: 0 };
}

export const MetaData = {
  encode(message: MetaData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.width !== 0) {
      writer.uint32(8).int32(message.width);
    }
    if (message.height !== 0) {
      writer.uint32(16).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetaData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.width = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetaData {
    return {
      width: isSet(object.width) ? Number(object.width) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: MetaData): unknown {
    const obj: any = {};
    if (message.width !== 0) {
      obj.width = Math.round(message.width);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MetaData>, I>>(base?: I): MetaData {
    return MetaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MetaData>, I>>(object: I): MetaData {
    const message = createBaseMetaData();
    message.width = object.width ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseEnvImage(): EnvImage {
  return { file: new Uint8Array(0), type: 0, stage: 0, meta: undefined };
}

export const EnvImage = {
  encode(message: EnvImage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file.length !== 0) {
      writer.uint32(10).bytes(message.file);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.stage !== 0) {
      writer.uint32(24).int32(message.stage);
    }
    if (message.meta !== undefined) {
      MetaData.encode(message.meta, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvImage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.stage = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.meta = MetaData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnvImage {
    return {
      file: isSet(object.file) ? bytesFromBase64(object.file) : new Uint8Array(0),
      type: isSet(object.type) ? cameraTypeFromJSON(object.type) : 0,
      stage: isSet(object.stage) ? stageTypeFromJSON(object.stage) : 0,
      meta: isSet(object.meta) ? MetaData.fromJSON(object.meta) : undefined,
    };
  },

  toJSON(message: EnvImage): unknown {
    const obj: any = {};
    if (message.file.length !== 0) {
      obj.file = base64FromBytes(message.file);
    }
    if (message.type !== 0) {
      obj.type = cameraTypeToJSON(message.type);
    }
    if (message.stage !== 0) {
      obj.stage = stageTypeToJSON(message.stage);
    }
    if (message.meta !== undefined) {
      obj.meta = MetaData.toJSON(message.meta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnvImage>, I>>(base?: I): EnvImage {
    return EnvImage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EnvImage>, I>>(object: I): EnvImage {
    const message = createBaseEnvImage();
    message.file = object.file ?? new Uint8Array(0);
    message.type = object.type ?? 0;
    message.stage = object.stage ?? 0;
    message.meta = (object.meta !== undefined && object.meta !== null) ? MetaData.fromPartial(object.meta) : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
