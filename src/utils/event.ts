class EventListener {
  private readonly _events: Map<string, any[]>;
  private static eventCount: number = 0;

  constructor() {
    this._events = this._events || new Map();
  }

  eventNames() {
    return Array.from(this._events.keys());
  }

  addListener(type: string, fn: any[]) {
    const handles = this._events.get(type);
    if (!handles) {
      this._events.set(type, [fn]);
    } else {
      handles.push(fn);
    }
  }

  emit(type: string, ...args: any) {
    const handles = this._events.get(type);
    if (!handles || !Array.isArray(handles)) {
      return;
    }
    handles.forEach((handle) => {
      handle.apply(this, args);
    });
  }

  removeListener(type: string, fn: any[]) {
    const handles = this._events.get(type);
    if (!handles || !Array.isArray(handles)) {
      return;
    }
    if (handles.length <= 1 || !fn) {
      this._events.delete(type);
    } else {
      const _handles = handles.filter((handle) => handle !== fn);
      this._events.set(type, _handles);
    }
  }
}

export default EventListener;
