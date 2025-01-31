# @vue-flow/core

## 2.0.0-next.0

### Major Changes

- [#717](https://github.com/bcakmakoglu/vue-flow/pull/717) [`702ff95`](https://github.com/bcakmakoglu/vue-flow/commit/702ff950096dd3f563e7747c32d8627239c652ce) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove experimental features flag

- [#717](https://github.com/bcakmakoglu/vue-flow/pull/717) [`6da35f5`](https://github.com/bcakmakoglu/vue-flow/commit/6da35f5767588f836292c91ce045b6c3b54a579e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update handle styles and avoid using fixed pixel positions to offset handle position and instead use transform to align handles

- [#1549](https://github.com/bcakmakoglu/vue-flow/pull/1549) [`f6bb711`](https://github.com/bcakmakoglu/vue-flow/commit/f6bb7111bf53b174ddbef5b458d249188d8b1524) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove deprecated exports `addEdge`, `updateEdge` & `useZoomPanHelper`

## 1.42.1

### Patch Changes

- [#1749](https://github.com/bcakmakoglu/vue-flow/pull/1749) [`56eb94e`](https://github.com/bcakmakoglu/vue-flow/commit/56eb94e10963de645a61b0fd737365b05415577d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct connection keys.

## 1.42.0

### Minor Changes

- [#1729](https://github.com/bcakmakoglu/vue-flow/pull/1729) [`8a832f1`](https://github.com/bcakmakoglu/vue-flow/commit/8a832f1bc2eb045f95d9cc0e66bba7be559caad5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use connection lookup to check what elements should be selected by a user selection box.

- [#1729](https://github.com/bcakmakoglu/vue-flow/pull/1729) [`d4a6910`](https://github.com/bcakmakoglu/vue-flow/commit/d4a6910b90feb2169da32ded7738645853684338) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `useNodeConnections` composable

- [#1742](https://github.com/bcakmakoglu/vue-flow/pull/1742) [`b1e2f57`](https://github.com/bcakmakoglu/vue-flow/commit/b1e2f57bf77ccb33e6b2d20e4be69e8c0bd29327) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Inherit attributes on main edge path element in BaseEdge component.

## 1.41.7

### Patch Changes

- [#1726](https://github.com/bcakmakoglu/vue-flow/pull/1726) [`763d122`](https://github.com/bcakmakoglu/vue-flow/commit/763d1220874edc08dd99b6a46bc2991ef1e92525) Thanks [@github-actions](https://github.com/apps/github-actions)! - use center position of handle as snapping point for connection lines

## 1.41.6

### Patch Changes

- [#1705](https://github.com/bcakmakoglu/vue-flow/pull/1705) [`047ec99`](https://github.com/bcakmakoglu/vue-flow/commit/047ec996d9e08cc456d1da858382944d2194d552) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update sourceNode and targetNode properties of edge when using `updateEdge`.

- [#1698](https://github.com/bcakmakoglu/vue-flow/pull/1698) [`7cc1c5a`](https://github.com/bcakmakoglu/vue-flow/commit/7cc1c5a8dd99b3979d741a33510281a159ba3ca6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent default scrolling behavior when using arrow keys to move nodes or a selection.

- [#1707](https://github.com/bcakmakoglu/vue-flow/pull/1707) [`4c9e517`](https://github.com/bcakmakoglu/vue-flow/commit/4c9e5176b9b30582456db6197ee55f646b614b86) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow Control key as pan activation key code.

- [#1707](https://github.com/bcakmakoglu/vue-flow/pull/1707) [`4c9e517`](https://github.com/bcakmakoglu/vue-flow/commit/4c9e5176b9b30582456db6197ee55f646b614b86) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check `panOnDrag` for allowed drag buttons in d3 filter

- [#1707](https://github.com/bcakmakoglu/vue-flow/pull/1707) [`4c9e517`](https://github.com/bcakmakoglu/vue-flow/commit/4c9e5176b9b30582456db6197ee55f646b614b86) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent browser context menu when triggering pane context menu event.

## 1.41.5

### Patch Changes

- [#1680](https://github.com/bcakmakoglu/vue-flow/pull/1680) [`b6c500d`](https://github.com/bcakmakoglu/vue-flow/commit/b6c500dca8a8baa054802a80772990c723f83e2d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - check if event on drag end is mouse/touch event or a usedrag event

- [#1696](https://github.com/bcakmakoglu/vue-flow/pull/1696) [`249efce`](https://github.com/bcakmakoglu/vue-flow/commit/249efce8107f1b51ecd98206953015b9b470e342) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly release key combinations when one of the keys is unpressed

- [#1693](https://github.com/bcakmakoglu/vue-flow/pull/1693) [`f28ffba`](https://github.com/bcakmakoglu/vue-flow/commit/f28ffba4d3f8166f2e80a9e6805d17db14ab2a89) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow using the `+` key in key combinations

- [#1695](https://github.com/bcakmakoglu/vue-flow/pull/1695) [`b09ad8e`](https://github.com/bcakmakoglu/vue-flow/commit/b09ad8ea35e974c83b5ad2ceea49e7971ff62cf3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Escape node labels and avoid rendering them as innerHTML

## 1.41.4

### Patch Changes

- [#1670](https://github.com/bcakmakoglu/vue-flow/pull/1670) [`4bc7658`](https://github.com/bcakmakoglu/vue-flow/commit/4bc76586e1013c8a17b2a83ff32a050f2e16c350) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - if selection key code is true prevent pan on drag on left mouse btn

## 1.41.3

### Patch Changes

- [#1662](https://github.com/bcakmakoglu/vue-flow/pull/1662) [`a41bd7b`](https://github.com/bcakmakoglu/vue-flow/commit/a41bd7b8218a47061824f2f4a5a2a7758e62561a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reorder pane class names to allow dragging cursor when selection mode is permanently enabled

- [#1667](https://github.com/bcakmakoglu/vue-flow/pull/1667) [`e51f08c`](https://github.com/bcakmakoglu/vue-flow/commit/e51f08cb51ee1bf442b70b88ce74f54db86ad4a7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set `isPressed` to `true` if permanent keypress is enabled

- [#1662](https://github.com/bcakmakoglu/vue-flow/pull/1662) [`a41bd7b`](https://github.com/bcakmakoglu/vue-flow/commit/a41bd7b8218a47061824f2f4a5a2a7758e62561a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow pan on drag when selectionKeyCode is `true` but panOnDrag key is not left mouse btn

- [#1665](https://github.com/bcakmakoglu/vue-flow/pull/1665) [`a6ec480`](https://github.com/bcakmakoglu/vue-flow/commit/a6ec4800f3256ce6d7d5d88212ac780634cb4f09) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use all handle bounds when using loose connection mode during edge update

## 1.41.2

### Patch Changes

- [#1624](https://github.com/bcakmakoglu/vue-flow/pull/1624) [`6692072`](https://github.com/bcakmakoglu/vue-flow/commit/6692072c919fef0f343b0a75d77636f5a820639e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use calculated drag distance to trigger drag-click.

- [#1618](https://github.com/bcakmakoglu/vue-flow/pull/1618) [`1fa90ac`](https://github.com/bcakmakoglu/vue-flow/commit/1fa90acec247b2dd8a6e8c6db7209eb8791a02d0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow node/edge pointer events if mouse event listeners (like `nodeClick` or `edgeClick`) exists.

## 1.41.1

### Patch Changes

- [#1608](https://github.com/bcakmakoglu/vue-flow/pull/1608) [`0581cd8`](https://github.com/bcakmakoglu/vue-flow/commit/0581cd820f7db3aa04a7247e56d283327906b93b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent overwriting width/height in node styles object with `node.width`/`node.height` if `width`/`height` already exist in the styles object.
  Fixes NodeResizer not working when initial size was passed to a node through `node.width`/`node.height`.

- [#1609](https://github.com/bcakmakoglu/vue-flow/pull/1609) [`81a81fa`](https://github.com/bcakmakoglu/vue-flow/commit/81a81faf5a2708b34c6b867593480050fbcfb27f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent drag-click handler when multi selection is active.

## 1.41.0

### Minor Changes

- [#1595](https://github.com/bcakmakoglu/vue-flow/pull/1595) [`9c18037`](https://github.com/bcakmakoglu/vue-flow/commit/9c180374406668457b47acb6646ff6a229d58c82) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `getHandleConnections` action to store.

### Patch Changes

- [#1600](https://github.com/bcakmakoglu/vue-flow/pull/1600) [`a3c72fe`](https://github.com/bcakmakoglu/vue-flow/commit/a3c72fe8a08a646954affe669609d55dfcc0b5e6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Don't set user selection flags on pointer down, only setting them when pointer is moved to allow pane click events to occur when `selectionKeyCode` is `true` (i.e. selection on drag).

## 1.40.1

### Patch Changes

- [#1591](https://github.com/bcakmakoglu/vue-flow/pull/1591) [`5eb677b`](https://github.com/bcakmakoglu/vue-flow/commit/5eb677bbbe113f2aa698db3156af38abe7892db3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Inline event names

## 1.40.0

### Minor Changes

- [#1575](https://github.com/bcakmakoglu/vue-flow/pull/1575) [`7aa49f4`](https://github.com/bcakmakoglu/vue-flow/commit/7aa49f4f6da9643797743cddb4074dbad85d0aa8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `null` as possible return type of data in `useNodesData`

### Patch Changes

- [#1586](https://github.com/bcakmakoglu/vue-flow/pull/1586) [`f2ed6a3`](https://github.com/bcakmakoglu/vue-flow/commit/f2ed6a3b3daeb526156173a8913dcc3785b4b999) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Only display grab cursor when panOnDrag is on left mouse button

- [#1585](https://github.com/bcakmakoglu/vue-flow/pull/1585) [`d7a51f8`](https://github.com/bcakmakoglu/vue-flow/commit/d7a51f8014c02043ca1c6c1e96210a0f6545175a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Simplify event emits definitions to avoid hitting complexity limit of TS.

## 1.39.3

### Patch Changes

- [#1569](https://github.com/bcakmakoglu/vue-flow/pull/1569) [`f6b394f`](https://github.com/bcakmakoglu/vue-flow/commit/f6b394f0b8ad698fead4f91eaed8650b5b5d2cc9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Push into dimensions changes array instead of using index access.

## 1.39.2

### Patch Changes

- [#1565](https://github.com/bcakmakoglu/vue-flow/pull/1565) [`90f573a`](https://github.com/bcakmakoglu/vue-flow/commit/90f573a4e56a1ad92e1d15f7a45a8f5600dc6307) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Only capture pointer when a valid selection has started

## 1.39.1

### Patch Changes

- [#1562](https://github.com/bcakmakoglu/vue-flow/pull/1562) [`e83b1ef`](https://github.com/bcakmakoglu/vue-flow/commit/e83b1ef9be83df10be9d4c8a35d6d0caff26e6b9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if injected vue flow state matches options id, otherwise create new state

- [#1562](https://github.com/bcakmakoglu/vue-flow/pull/1562) [`e83b1ef`](https://github.com/bcakmakoglu/vue-flow/commit/e83b1ef9be83df10be9d4c8a35d6d0caff26e6b9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prefer options id over scope id when finding vue flow internal state by id

## 1.39.0

### Minor Changes

- [#1542](https://github.com/bcakmakoglu/vue-flow/pull/1542) [`de75620`](https://github.com/bcakmakoglu/vue-flow/commit/de756206ccdbfa364d8382c7fef51104aceb1c4d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `paneClickDistance` option. Allows specifying the distance between mousedown and mouseup in which a click would still be registered (by default `0`)

- [#1535](https://github.com/bcakmakoglu/vue-flow/pull/1535) [`1a812f3`](https://github.com/bcakmakoglu/vue-flow/commit/1a812f31ddafd008082fc8d0378ec880a1b57a33) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `autoPanSpeed` prop. Allows specifying at what speed the pane moves when auto-panning via node-drag, selection-drag or connection-drag

### Patch Changes

- [#1536](https://github.com/bcakmakoglu/vue-flow/pull/1536) [`235d564`](https://github.com/bcakmakoglu/vue-flow/commit/235d564fcf2bcd7036f9f0bb40c9f32d4d5af014) Thanks [@github-actions](https://github.com/apps/github-actions)! - Dispatch click if drag move was attempted and threshold was not crossed, ignoring any movement that's too small to be considered a drag at all

- [#1545](https://github.com/bcakmakoglu/vue-flow/pull/1545) [`2910992`](https://github.com/bcakmakoglu/vue-flow/commit/2910992c2d59789c5c8cf537655d2d6032471aa7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent calling `onSelectionEnd` when clicking a selection

- [#1543](https://github.com/bcakmakoglu/vue-flow/pull/1543) [`85c8d2d`](https://github.com/bcakmakoglu/vue-flow/commit/85c8d2ddc0612f9831d55f074c1e0d4a4ceca814) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Handle pointer capture for selection on drag

## 1.38.5

### Patch Changes

- [#1530](https://github.com/bcakmakoglu/vue-flow/pull/1530) [`e7bcca5`](https://github.com/bcakmakoglu/vue-flow/commit/e7bcca511477a5b749787235ee521fa8393e681b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - ignore minor mouse movements when marking a node drag as aborted

## 1.38.4

### Patch Changes

- [#1525](https://github.com/bcakmakoglu/vue-flow/pull/1525) [`e8427cf`](https://github.com/bcakmakoglu/vue-flow/commit/e8427cf9dc54856a9b405e64df9af4fae704dff2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent duplicate node click event by checking if drag was actually aborted before emitting node-click

## 1.38.3

### Patch Changes

- [#1522](https://github.com/bcakmakoglu/vue-flow/pull/1522) [`ccca803`](https://github.com/bcakmakoglu/vue-flow/commit/ccca803e130bb2152b6cc16b29e4ae10b9b8e63a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Emit `nodeClick` event when a node is dragged without exceeding the node drag threshold (i.e. no visible movement has happened)

## 1.38.2

### Patch Changes

- [#1517](https://github.com/bcakmakoglu/vue-flow/pull/1517) [`d2ec752`](https://github.com/bcakmakoglu/vue-flow/commit/d2ec752ca404b58a26831849934628057b0109ca) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `post` flush timing to re-observe node size when toggling node visibility

- [#1514](https://github.com/bcakmakoglu/vue-flow/pull/1514) [`6a0813e`](https://github.com/bcakmakoglu/vue-flow/commit/6a0813e525e8d24c1ca2888de97f66ac6e7de4c0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid re-snapping to the same handle

## 1.38.1

### Patch Changes

- [#1510](https://github.com/bcakmakoglu/vue-flow/pull/1510) [`4643676`](https://github.com/bcakmakoglu/vue-flow/commit/4643676e689def1901fe171a4b78257db2089684) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct calculation of nodes inside selection rect

## 1.38.0

### Minor Changes

- [#1492](https://github.com/bcakmakoglu/vue-flow/pull/1492) [`f85ea42`](https://github.com/bcakmakoglu/vue-flow/commit/f85ea42d591f75d714e864f9114ce3e22cd0cd99) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing event target to `useKeyPress`

- [#1492](https://github.com/bcakmakoglu/vue-flow/pull/1492) [`f85ea42`](https://github.com/bcakmakoglu/vue-flow/commit/f85ea42d591f75d714e864f9114ce3e22cd0cd99) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use pointer events to capture interactions on `Pane` cmp and prevent selections from being cancelled when moving outside of the `Pane` while holding selection key

- [#1508](https://github.com/bcakmakoglu/vue-flow/pull/1508) [`005b25b`](https://github.com/bcakmakoglu/vue-flow/commit/005b25bd56789bfdcaa589025ff158fbeb719e01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct end handle position in connection line component and store handle positions during connections.

- [#1502](https://github.com/bcakmakoglu/vue-flow/pull/1502) [`30c81dc`](https://github.com/bcakmakoglu/vue-flow/commit/30c81dccc840aa8441fb8b8dd3c38a4792719f04) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing a Record<string, any> as class to node/edge objects

- [#1502](https://github.com/bcakmakoglu/vue-flow/pull/1502) [`30c81dc`](https://github.com/bcakmakoglu/vue-flow/commit/30c81dccc840aa8441fb8b8dd3c38a4792719f04) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing an array of strings as class to node/edge objects

- [#1492](https://github.com/bcakmakoglu/vue-flow/pull/1492) [`2dff0dd`](https://github.com/bcakmakoglu/vue-flow/commit/2dff0dd85d2cb26f563c23a22a08b3d430309e74) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make `useKeyPress` public and export it

### Patch Changes

- [#1506](https://github.com/bcakmakoglu/vue-flow/pull/1506) [`45e9d03`](https://github.com/bcakmakoglu/vue-flow/commit/45e9d0322d68d774346315ec87ad7d906bad7cf8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `v-memo` from EdgeRenderer so that edges get their correct z-index applied

- [#1494](https://github.com/bcakmakoglu/vue-flow/pull/1494) [`09c32c5`](https://github.com/bcakmakoglu/vue-flow/commit/09c32c51b13d3188b3339dcb3eb985474fd770a1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Calculate correct handle position in handle lookup

## 1.37.1

### Patch Changes

- [#1483](https://github.com/bcakmakoglu/vue-flow/pull/1483) [`6d4d2be`](https://github.com/bcakmakoglu/vue-flow/commit/6d4d2be8396885f3edd9586db48021a8e0615421) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct access of options id in `useVueFlow`

## 1.37.0

### Minor Changes

- [#1481](https://github.com/bcakmakoglu/vue-flow/pull/1481) [`192b154`](https://github.com/bcakmakoglu/vue-flow/commit/192b15414aa39bfde209b07c39f799a560a368ea) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add overloads to `useVueFlow`. Allows calling `useVueFlow` with an `id` string only while emitting a deprecation warning for using the options obj.

- [#1476](https://github.com/bcakmakoglu/vue-flow/pull/1476) [`1b38c3f`](https://github.com/bcakmakoglu/vue-flow/commit/1b38c3f692f9cfe3c10c2bfadc0d0f782f6b892d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use empty array when determing whether to update all node internals

- [#1479](https://github.com/bcakmakoglu/vue-flow/pull/1479) [`659ca6a`](https://github.com/bcakmakoglu/vue-flow/commit/659ca6a0b74b7a96434d2e03a39a72154e5b4756) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `EdgePathParams` type and export it

## 1.36.0

### Minor Changes

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`ebf387e`](https://github.com/bcakmakoglu/vue-flow/commit/ebf387eeea49cce72ba2e9546e9dbfb969d72ec9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `initialized` property from `GraphNode` type

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`c94e175`](https://github.com/bcakmakoglu/vue-flow/commit/c94e175f31f6404ce2e72e3a20604a20be513a57) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove node intersections from drag event args

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`231673e`](https://github.com/bcakmakoglu/vue-flow/commit/231673e938a4f4a4fdaaf8932af57d9b43343a48) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `updateEdgeData` action

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`bb6abed`](https://github.com/bcakmakoglu/vue-flow/commit/bb6abeda131847f512cb16130eb627ae8636789d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reduce node `getBoundingClientRect` calls by passing node-bounds directly to `getHandleBounds`

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`30e999a`](https://github.com/bcakmakoglu/vue-flow/commit/30e999aab8e499f4bba5cc81505749538cf31fc6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `connectedEdges` as arg from NodeMouseEvents

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`ba6e250`](https://github.com/bcakmakoglu/vue-flow/commit/ba6e25017c501179463fa542db03eaf94dc16b09) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `useEdgesData` composable

### Patch Changes

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`408dfea`](https://github.com/bcakmakoglu/vue-flow/commit/408dfeac512e0e33aa3f54c5b635ee14dd924bcd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Hide viewport until initial fit view is finished

## 1.35.0

### Minor Changes

- [#1447](https://github.com/bcakmakoglu/vue-flow/pull/1447) [`acd6069`](https://github.com/bcakmakoglu/vue-flow/commit/acd60698637b93fcb7cc3fe4161673865c26d5db) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Return non-nullable edge from `useEdge`

- [#1447](https://github.com/bcakmakoglu/vue-flow/pull/1447) [`acd6069`](https://github.com/bcakmakoglu/vue-flow/commit/acd60698637b93fcb7cc3fe4161673865c26d5db) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use node/edge id as the only dependency to render nodes/edges.

- [#1446](https://github.com/bcakmakoglu/vue-flow/pull/1446) [`d8bdac1`](https://github.com/bcakmakoglu/vue-flow/commit/d8bdac137d753d82270bea15cbb5b30afc662e9b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove visibility (hidden) check from `getNodes` & `getEdges`

- [#1440](https://github.com/bcakmakoglu/vue-flow/pull/1440) [`a02b9a4`](https://github.com/bcakmakoglu/vue-flow/commit/a02b9a42598adc0a37198297ca71d48dd621f42e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove auto-generated hanle-ids and use `null` as the default handle id.
  If you were relying on handle-ids in your code but weren't assigning them explicitly, you'll might need to update your code to handle this change.
  By default, if you don't provide a handle-id, it will be `null` and the first handle of the corresponding type will be used.

- [#1446](https://github.com/bcakmakoglu/vue-flow/pull/1446) [`d8bdac1`](https://github.com/bcakmakoglu/vue-flow/commit/d8bdac137d753d82270bea15cbb5b30afc662e9b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Render `null` if edge is hidden

- [#1433](https://github.com/bcakmakoglu/vue-flow/pull/1433) [`7547ade`](https://github.com/bcakmakoglu/vue-flow/commit/7547adeca54c133274a2ab62a5b31b168f017679) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `edgeId` to handle connection objects returned by `useHandleConnections`

- [#1450](https://github.com/bcakmakoglu/vue-flow/pull/1450) [`d64efc6`](https://github.com/bcakmakoglu/vue-flow/commit/d64efc6ddf3a579a97151b279285c268dec22943) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Replace internally nodeIds/edgeIds array with nodeLookup/edgeLookup map

- [#1445](https://github.com/bcakmakoglu/vue-flow/pull/1445) [`64a5162`](https://github.com/bcakmakoglu/vue-flow/commit/64a5162bb056b31e898fca6a499173a6c3dc0ae6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Render `null` if node is hidden but render whole list of nodes regardless of visibility

### Patch Changes

- [#1449](https://github.com/bcakmakoglu/vue-flow/pull/1449) [`27ec132`](https://github.com/bcakmakoglu/vue-flow/commit/27ec1322ee8625f2035678d9cba6a642bd091cf1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable pinch zoom on mobile if `zoomToPinch` is `false`

- [#1448](https://github.com/bcakmakoglu/vue-flow/pull/1448) [`fe58110`](https://github.com/bcakmakoglu/vue-flow/commit/fe581106d80d4f49c26e35d01254cde0ba8d7923) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable dragging when using multi-touch

## 1.34.1

### Patch Changes

- [#1426](https://github.com/bcakmakoglu/vue-flow/pull/1426) [`c997a80`](https://github.com/bcakmakoglu/vue-flow/commit/c997a8095461f3dfcd184ca5b527f923e8da854b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Replace array fns with for-loops

- [#1425](https://github.com/bcakmakoglu/vue-flow/pull/1425) [`220c290`](https://github.com/bcakmakoglu/vue-flow/commit/220c29036cc8c09d0904e5dcf26461781369cf80) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use separate prevConnections map in `useHandleConnections` composable to ensure comparison check is correct and callbacks are executed.

## 1.34.0

### Minor Changes

- [#1415](https://github.com/bcakmakoglu/vue-flow/pull/1415) [`bcb6c38`](https://github.com/bcakmakoglu/vue-flow/commit/bcb6c389d634e6604f332b86dc12eee8e5b8c08e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add warning when style imports are missing.

- [#1421](https://github.com/bcakmakoglu/vue-flow/pull/1421) [`69631f0`](https://github.com/bcakmakoglu/vue-flow/commit/69631f07dc6b367c6932b8642eb385b8dcc176ff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `PanelPositionType`

## 1.33.8

### Patch Changes

- [#1404](https://github.com/bcakmakoglu/vue-flow/pull/1404) [`b636853`](https://github.com/bcakmakoglu/vue-flow/commit/b636853eac087c932dc4baa4c72f7e5837dca927) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent auto-pan on connect when it's set to false.

## 1.33.7

### Patch Changes

- [#1378](https://github.com/bcakmakoglu/vue-flow/pull/1378) [`58d1a36`](https://github.com/bcakmakoglu/vue-flow/commit/58d1a36d3a14a69b22518e4863ba47bad35d66fb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow wheel events to bubble up to the user if the event is not caught and used by the viewport

## 1.33.6

### Patch Changes

- [#1375](https://github.com/bcakmakoglu/vue-flow/pull/1375) [`0754e79`](https://github.com/bcakmakoglu/vue-flow/commit/0754e798927b4c38958c947411ef7fd85faf8fae) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass pathOptions to edges

- [#1389](https://github.com/bcakmakoglu/vue-flow/pull/1389) [`f62f2ca`](https://github.com/bcakmakoglu/vue-flow/commit/f62f2ca80cb37778a1c8b2133797dc367c99da73) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent delete key action inside input field even if modifier is pressed.

- [#1373](https://github.com/bcakmakoglu/vue-flow/pull/1373) [`a88cd9e`](https://github.com/bcakmakoglu/vue-flow/commit/a88cd9e10da077f9ea71ba87e377d35ad64ef110) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set ltr on vue flow wrapper

- [#1374](https://github.com/bcakmakoglu/vue-flow/pull/1374) [`2821c32`](https://github.com/bcakmakoglu/vue-flow/commit/2821c32b4fa7b6f929f62b70591d050190d3ee5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow pinch-zoom if preventScrolling is disabled

## 1.33.5

### Patch Changes

- [#1356](https://github.com/bcakmakoglu/vue-flow/pull/1356) [`b5beac2`](https://github.com/bcakmakoglu/vue-flow/commit/b5beac226d581be8a1a43c90d67a6a96049ce93c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Store current Storage instance on vue app to avoid hydration errors.

## 1.33.4

### Patch Changes

- [#1346](https://github.com/bcakmakoglu/vue-flow/pull/1346) [`376d0ac`](https://github.com/bcakmakoglu/vue-flow/commit/376d0acdb34af1e6ed7c4ee1a94e5fe4d9dd1e15) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Revert extending FlowEmits from separate interfaces for nodes and edges as it breaks event definitions for the actual component, causing warnings that the event was emitted by isn't defined.

## 1.33.3

### Patch Changes

- [#1343](https://github.com/bcakmakoglu/vue-flow/pull/1343) [`89b76a1`](https://github.com/bcakmakoglu/vue-flow/commit/89b76a172eb2d92949d64fd51c2630b15f17506e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use separate interfaces for Edge- and NodeEvents and extend FlowEmit interface from them. Fixes edge events overwriting node event definitions when types are created.

## 1.33.2

### Patch Changes

- [#1338](https://github.com/bcakmakoglu/vue-flow/pull/1338) [`f3c09ce`](https://github.com/bcakmakoglu/vue-flow/commit/f3c09cea2d346837dc00fd434cace334f278195d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use nullish check to fallback to default center values in `getSmoothstepPath`

- [#1339](https://github.com/bcakmakoglu/vue-flow/pull/1339) [`eb20a0f`](https://github.com/bcakmakoglu/vue-flow/commit/eb20a0f2090eddbc32230853e23750435f60a154) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if node dimensions exist in `useNodesInitialized`

- [#1335](https://github.com/bcakmakoglu/vue-flow/pull/1335) [`ed5d104`](https://github.com/bcakmakoglu/vue-flow/commit/ed5d104d312a0e456c50b1e1206fd7a1f80161ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `ref` prop from `BaseEdge`

## 1.33.1

### Patch Changes

- [#1329](https://github.com/bcakmakoglu/vue-flow/pull/1329) [`9b5d496`](https://github.com/bcakmakoglu/vue-flow/commit/9b5d496a58705270476530360500e9b9ce13abe8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct return type of `useNodesData`

## 1.33.0

### Minor Changes

- [#1323](https://github.com/bcakmakoglu/vue-flow/pull/1323) [`ed4ccf4`](https://github.com/bcakmakoglu/vue-flow/commit/ed4ccf434ee8c8fcf47b43ebc5b4e25175009680) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add node id and node type to return of `useNodesData`.

  ⚠️This is a small breaking change from the previous implementation!

  Previously you would only receive the data object back, now you will receive an object with the data and the node id and type.

  ```ts
  const nodesData = useNodesData(nodeIds);

  // Previously
  nodesData.forEach((data) => {
    // ...
  });

  // Now
  nodesData.forEach(({ id, type, data }) => {
    // ...
  });
  ```

### Patch Changes

- [#1326](https://github.com/bcakmakoglu/vue-flow/pull/1326) [`78a604c`](https://github.com/bcakmakoglu/vue-flow/commit/78a604c35aa908dc7453a70c636fb0e6f9ec4242) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use default cursor for nodes and use grab cursor if node is draggable

- [#1324](https://github.com/bcakmakoglu/vue-flow/pull/1324) [`c964220`](https://github.com/bcakmakoglu/vue-flow/commit/c964220e955b7e2a7c09f8607c683dada59c4827) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent esc keypress triggers when keyboard a11y is disabled

## 1.32.1

### Patch Changes

- [#1314](https://github.com/bcakmakoglu/vue-flow/pull/1314) [`14c4253`](https://github.com/bcakmakoglu/vue-flow/commit/14c4253ff43646ba0f563880ac2fc4733345d65c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct smoothstep edge pathing

## 1.32.0

### Minor Changes

- [#1301](https://github.com/bcakmakoglu/vue-flow/pull/1301) [`1c8d15e`](https://github.com/bcakmakoglu/vue-flow/commit/1c8d15e61d7a728337032da66b280a5018f53b2c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Use data obj in default nodes to get label

- [#1307](https://github.com/bcakmakoglu/vue-flow/pull/1307) [`290bca3`](https://github.com/bcakmakoglu/vue-flow/commit/290bca30cc58414f62dd9cb722aa6510b8aca5e5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `edgeId` to `useHandleConnections` return value

### Patch Changes

- [#1301](https://github.com/bcakmakoglu/vue-flow/pull/1301) [`1c8d15e`](https://github.com/bcakmakoglu/vue-flow/commit/1c8d15e61d7a728337032da66b280a5018f53b2c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update composables jsdocs

- [#1313](https://github.com/bcakmakoglu/vue-flow/pull/1313) [`ce98113`](https://github.com/bcakmakoglu/vue-flow/commit/ce98113a292d18896d761594258914805f52318f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wrap edge marker urls with single quotes to allow for css vars as color

## 1.31.0

### Minor Changes

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`1e60944`](https://github.com/bcakmakoglu/vue-flow/commit/1e609440d392ba79cb4162cfc7d57225ce394400) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `useNodeId` composable

  ## 🧙 Example

  ```ts
  const nodeId = useNodeId();

  console.log("nodeId", nodeId); // '1'
  ```

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`299408f`](https://github.com/bcakmakoglu/vue-flow/commit/299408f1706865dca619e6caae289c002d6fe2ed) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `updateNode` action

  ## 🧙 Example

  ```ts
  const { updateNode } = useVueFlow();

  updateNode("1", { position: { x: 100, y: 100 } });

  // or using a function to update the node
  updateNode("1", (node) => ({ ...node, position: { x: 100, y: 100 } }));

  // passing options - `replace` will replace the node instead of merging it
  updateNode(
    "1",
    { id: "1", label: "Node 1", position: { x: 100, y: 100 } },
    { replace: true }
  );
  ```

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`eae2118`](https://github.com/bcakmakoglu/vue-flow/commit/eae2118cd3ca0ef915dcce953abdb91a7f443af1) Thanks [@github-actions](https://github.com/apps/github-actions)! - Call `onNodesInitialized` whenever `areNodesInitialized` is true instead of only once

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`36ffa3f`](https://github.com/bcakmakoglu/vue-flow/commit/36ffa3f0c5a68cccac24b31c92978811c9d4cf0c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Omit `events` in nodes and edges when returning them from `toObject`

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`85536ed`](https://github.com/bcakmakoglu/vue-flow/commit/85536ed8fa686f3736cd5f0ac3ef4476fb871d30) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `useHandleConnections` composable

  ## 🧙 Example

  ```ts
  const connections = useHandleConnections({
    // type of the handle you are looking for - accepts a `MaybeRefOrGetter<string>`
    type: "source",

    // the id of the handle you are looking for - accepts a `MaybeRefOrGetter<string | undefined> | undefined` [OPTIONAL]
    id: "a",

    // if not provided, the node id from the NodeIdContext is used - accepts a `MaybeRefOrGetter<string | undefined> | undefined`
    nodeId: "1",

    // a cb that is called when a new connection is added
    onConnect: (params) => {
      console.log("onConnect", params);
    },

    // a cb that is called when a connection is removed
    onDisconnect: (params) => {
      console.log("onDisconnect", params);
    },
  });

  watch(
    connections,
    (next) => {
      console.log("connections", next);
    },
    { immediate: true }
  );
  ```

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`4bce8c9`](https://github.com/bcakmakoglu/vue-flow/commit/4bce8c9136a2c13c0643a8c4f9f2bd2516b99df3) Thanks [@github-actions](https://github.com/apps/github-actions)! - Find handle by id regardless of number of handles that exist

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`85536ed`](https://github.com/bcakmakoglu/vue-flow/commit/85536ed8fa686f3736cd5f0ac3ef4476fb871d30) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `connectionLookup` to state

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`3b02809`](https://github.com/bcakmakoglu/vue-flow/commit/3b028097ed4a41e59aa8db00158186045f1c1a1d) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `onInit` hook and deprecate `onPaneReady`

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`299408f`](https://github.com/bcakmakoglu/vue-flow/commit/299408f1706865dca619e6caae289c002d6fe2ed) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `updateNodeData` action

  ## 🧙 Example

  ```ts
  const { updateNodeData } = useVueFlow();

  updateNodeData("1", { foo: "bar" });

  // or using a function to update the data
  updateNodeData("1", (data) => ({ ...data, foo: "bar" }));

  // passing options - `replace` will replace the data instead of merging it
  updateNodeData("1", { foo: "bar" }, { replace: true });
  ```

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`823956e`](https://github.com/bcakmakoglu/vue-flow/commit/823956ee92f880f0a546ab4c040c6b115b8b3345) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `useNodesData` composable

  ## 🧙 Example

  ### Single node id

  ```ts
  const nodeId = "1";

  const data = useNodesData(nodeId);

  console.log(data.value); // '[{ /* ... */ }]
  ```

  ### Array of node ids

  ```ts
  const nodeIds = ["1", "2", "3"];

  const data = useNodesData(nodeIds);

  console.log(data.value); // '[{ /* ... */ }]
  ```

  ### Asserting data type

  ```ts
  import type { Node } from "@vue-flow/core";

  interface Data {
    foo: string;
    bar: string;
  }

  type MyNode = Node<CustomNodeData>;

  const nodeId = "1";

  const data = useNodesData([nodeId], (node): node is MyNode => {
    return "foo" in node.data && "bar" in node.data;
  });

  console.log(data.value); // '[{ /* foo: string; bar: string */ }]
  ```

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`99fa4fd`](https://github.com/bcakmakoglu/vue-flow/commit/99fa4fd6a9be8df866788fbe83e16dde63786328) Thanks [@github-actions](https://github.com/apps/github-actions)! - Call `fitViewOnInit` when initial node dimensions are available

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`9f8607f`](https://github.com/bcakmakoglu/vue-flow/commit/9f8607f3d9e7a5c3c0d4671f57b5d0e206b4345e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Deprecate `events` property on nodes and edges

- [#1278](https://github.com/bcakmakoglu/vue-flow/pull/1278) [`ecff6f6`](https://github.com/bcakmakoglu/vue-flow/commit/ecff6f608f9ad2961d3fe07e8658c37debac2e78) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add error args to `VueFlowError`

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`3f60a80`](https://github.com/bcakmakoglu/vue-flow/commit/3f60a803d7a7bb7ec9d3aee316a291a2a2917212) Thanks [@github-actions](https://github.com/apps/github-actions)! - Replace `Array.forEach` loops with `for...of`

- [#1278](https://github.com/bcakmakoglu/vue-flow/pull/1278) [`ecff6f6`](https://github.com/bcakmakoglu/vue-flow/commit/ecff6f608f9ad2961d3fe07e8658c37debac2e78) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `isErrorOfType` typeguard to narrow the type of a VueFlowError and infer it's args

### Patch Changes

- [#1295](https://github.com/bcakmakoglu/vue-flow/pull/1295) [`4a5aa14`](https://github.com/bcakmakoglu/vue-flow/commit/4a5aa146d30a4f825b3ccafc5da9628a82bf2409) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When updating nodes or edges by overwriting the original array, update the nodes and edges in the state by using them as the target for `Object.assign`. This keeps reference in-tact and ensures reactivity when these objects are changed/updated

- [#1271](https://github.com/bcakmakoglu/vue-flow/pull/1271) [`bbee266`](https://github.com/bcakmakoglu/vue-flow/commit/bbee266a015dd567873107dadc18374c14bf382b) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update node dimensions on next tick

## 1.30.1

### Patch Changes

- [#1266](https://github.com/bcakmakoglu/vue-flow/pull/1266) [`c571dde`](https://github.com/bcakmakoglu/vue-flow/commit/c571dde2cca3a7de4c9b954e8f3fdd14a3171b03) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if values are numeric in `isRect` instead of checking for truthiness of values

## 1.30.0

### Minor Changes

- [#1261](https://github.com/bcakmakoglu/vue-flow/pull/1261) [`427bfac`](https://github.com/bcakmakoglu/vue-flow/commit/427bface1bfbe41ecc16465079144fa91c0d2249) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Hide viewport until `fitViewOnInitDone` is `true` (if `fitViewOnInit` is not used, this value will automatically become `true` the first time node dimensions are set

- [#1261](https://github.com/bcakmakoglu/vue-flow/pull/1261) [`427bfac`](https://github.com/bcakmakoglu/vue-flow/commit/427bface1bfbe41ecc16465079144fa91c0d2249) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Emit `paneReady` event after 1ms timeout

## 1.29.2

### Patch Changes

- [#1257](https://github.com/bcakmakoglu/vue-flow/pull/1257) [`31817d3`](https://github.com/bcakmakoglu/vue-flow/commit/31817d342dd57257eedd789c69c72cab47d683a9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if `event.key` or `event.code` exists before trying to match keyfilter against keys

## 1.29.1

### Patch Changes

- [#1252](https://github.com/bcakmakoglu/vue-flow/pull/1252) [`734d2ba`](https://github.com/bcakmakoglu/vue-flow/commit/734d2ba3a85a35519436f8ee296650281d9a0db7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Watch `shouldPanOnDrag` & `shouldPanOnScroll` to determine whether listeners should be bound or not

## 1.29.0

### Minor Changes

- [#1237](https://github.com/bcakmakoglu/vue-flow/pull/1237) [`16c7d32`](https://github.com/bcakmakoglu/vue-flow/commit/16c7d32746d72dd413e866c5c19461a5bee227ca) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Expose handleClick and handlePointerDown from handle components

- [#1238](https://github.com/bcakmakoglu/vue-flow/pull/1238) [`dd4cbe0`](https://github.com/bcakmakoglu/vue-flow/commit/dd4cbe0c92121fc6039e5f43bdc6e5d1663b8069) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `useConnection` composable for easy access of current connection params

### Patch Changes

- [#1243](https://github.com/bcakmakoglu/vue-flow/pull/1243) [`b5e77a4`](https://github.com/bcakmakoglu/vue-flow/commit/b5e77a43da76db0ee4cbc16d205e90ef84f2ed62) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass vueflow id to `getMarkerId` in connection line component

- [#1236](https://github.com/bcakmakoglu/vue-flow/pull/1236) [`be15b5a`](https://github.com/bcakmakoglu/vue-flow/commit/be15b5acbcb6ccd06107a5dc195cc9e0c35b211c) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add default event handler when no handlers for a given event exist anymore

- [#1250](https://github.com/bcakmakoglu/vue-flow/pull/1250) [`f3c786f`](https://github.com/bcakmakoglu/vue-flow/commit/f3c786f3c9e4445a401e063306e8d1985b3eaf5e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow panning on scroll when selection is active

- [#1236](https://github.com/bcakmakoglu/vue-flow/pull/1236) [`d46ac3a`](https://github.com/bcakmakoglu/vue-flow/commit/d46ac3a52c55e96d2e1994a60407767cdd945118) Thanks [@github-actions](https://github.com/apps/github-actions)! - Merge connection line styles with options

- [#1250](https://github.com/bcakmakoglu/vue-flow/pull/1250) [`b71754f`](https://github.com/bcakmakoglu/vue-flow/commit/b71754fe10a3f7a13132ed1f6058385da267ed88) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Return false for boolean key filter and set the `isPressed` ref to whatever the keyFilter would be (true/false)

- [#1250](https://github.com/bcakmakoglu/vue-flow/pull/1250) [`4109cf1`](https://github.com/bcakmakoglu/vue-flow/commit/4109cf1027455fbb308cdc4262e401e904ad07e2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Await fitView before emitting pane-ready

- [#1236](https://github.com/bcakmakoglu/vue-flow/pull/1236) [`d46ac3a`](https://github.com/bcakmakoglu/vue-flow/commit/d46ac3a52c55e96d2e1994a60407767cdd945118) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add fallback for connection line type (bezier as default)

## 1.28.0

### Minor Changes

- [#1216](https://github.com/bcakmakoglu/vue-flow/pull/1216) [`845d591`](https://github.com/bcakmakoglu/vue-flow/commit/845d5911fd90f8618dd19c6180ea34d3d6a0da74) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add source and target handle ids to removal change of edges.

## 1.27.1

### Patch Changes

- [#1220](https://github.com/bcakmakoglu/vue-flow/pull/1220) [`2b4ed51`](https://github.com/bcakmakoglu/vue-flow/commit/2b4ed515b54fa7372fd5b086311520b127b83ff4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use relative paths for imports.

## 1.27.0

### Minor Changes

- [#1203](https://github.com/bcakmakoglu/vue-flow/pull/1203) [`161f4808`](https://github.com/bcakmakoglu/vue-flow/commit/161f48080e74e28322c42e113e8d511db2e80c0a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set default node drag threshold to 1

- [#1212](https://github.com/bcakmakoglu/vue-flow/pull/1212) [`39cd3027`](https://github.com/bcakmakoglu/vue-flow/commit/39cd302701558c1c625fdc4da7535ae6505253a4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Return promise from `fromObject` action. Promise is resolved when transition of `setViewport` ends

### Patch Changes

- [#1214](https://github.com/bcakmakoglu/vue-flow/pull/1214) [`cda531f5`](https://github.com/bcakmakoglu/vue-flow/commit/cda531f54e835aea80d1c159d7bcc62e466dd0c8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add nullish check when looking up the edge label renderer el

## 1.26.0

### Minor Changes

- [#1193](https://github.com/bcakmakoglu/vue-flow/pull/1193) [`bc793ab9`](https://github.com/bcakmakoglu/vue-flow/commit/bc793ab9d50d9df40e2655d0eeccdcbde3feb5b1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Keep connection lines snapped while hovering over handles

### Patch Changes

- [#1196](https://github.com/bcakmakoglu/vue-flow/pull/1196) [`1aa69c59`](https://github.com/bcakmakoglu/vue-flow/commit/1aa69c59f18a200c2881c2f77a339a7473c22d02) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct prop value when prop watcher is executed instead of using prop key as value

## 1.25.3

### Patch Changes

- [#1184](https://github.com/bcakmakoglu/vue-flow/pull/1184) [`6639551b`](https://github.com/bcakmakoglu/vue-flow/commit/6639551b35596001f61f199e94beefa7a331174b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Respect zoom activation key code when hovering an element with `nopan` on it

- [#1183](https://github.com/bcakmakoglu/vue-flow/pull/1183) [`d43852b0`](https://github.com/bcakmakoglu/vue-flow/commit/d43852b05cef23b45f8abe1df758100e6b6b8e77) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use nodeRect to check for intersections

## 1.25.2

### Patch Changes

- [#1178](https://github.com/bcakmakoglu/vue-flow/pull/1178) [`29c01f42`](https://github.com/bcakmakoglu/vue-flow/commit/29c01f428c308f9edeaefdc9b0b1796853b813fd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Revert importing types from vue instead of vueuse/core as it causes handle position to be messed up

## 1.25.1

### Patch Changes

- [#1177](https://github.com/bcakmakoglu/vue-flow/pull/1177) [`c9787c2b`](https://github.com/bcakmakoglu/vue-flow/commit/c9787c2bce11ebe7c1dd8f564efc0a2a3186bc46) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait for d3zoom to exist before setting options

- [#1174](https://github.com/bcakmakoglu/vue-flow/pull/1174) [`4cefa322`](https://github.com/bcakmakoglu/vue-flow/commit/4cefa322fe2ec665b253ff6ac51004dc8afe322c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Import `toValue` from vueuse/core to avoid amiguous export with vue

## 1.25.0

### Minor Changes

- [#1170](https://github.com/bcakmakoglu/vue-flow/pull/1170) [`cce71c9c`](https://github.com/bcakmakoglu/vue-flow/commit/cce71c9ce6f33656932dc9f05169a5f5907d5158) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add currently stored nodes to isValidConnection args

- [#1166](https://github.com/bcakmakoglu/vue-flow/pull/1166) [`993c058b`](https://github.com/bcakmakoglu/vue-flow/commit/993c058b8ce4e525597ef535a17dcccb219b9a2e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add slots and emits type definitions

## 1.24.2

### Patch Changes

- [#1164](https://github.com/bcakmakoglu/vue-flow/pull/1164) [`e3edb6dd`](https://github.com/bcakmakoglu/vue-flow/commit/e3edb6dd8bfeebc5c4becc0bd564072fe3f04be1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly cleanup drag handlers when drag is disabled

- [#1163](https://github.com/bcakmakoglu/vue-flow/pull/1163) [`56469e95`](https://github.com/bcakmakoglu/vue-flow/commit/56469e95df5031362d88476c061f730ac9fffd28) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use existing node, if one was passed, for intersection checks

- [#1159](https://github.com/bcakmakoglu/vue-flow/pull/1159) [`8013c9cf`](https://github.com/bcakmakoglu/vue-flow/commit/8013c9cf20a9be89746e274be799043c153390bf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add immediate flag to prop watchers. Fixes default viewport values not being available when viewport is mounted

- [#1159](https://github.com/bcakmakoglu/vue-flow/pull/1159) [`8013c9cf`](https://github.com/bcakmakoglu/vue-flow/commit/8013c9cf20a9be89746e274be799043c153390bf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Do not wait for d3zoom to be available when setting min/max zoom

## 1.24.1

### Patch Changes

- [#1151](https://github.com/bcakmakoglu/vue-flow/pull/1151) [`c2a74f57`](https://github.com/bcakmakoglu/vue-flow/commit/c2a74f578b0b7dcb7bbbc02ea2c0e378beba4740) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow pan on drag when pan activation key is pressed and panOnDrag is set to false

## 1.24.0

### Minor Changes

- [#1149](https://github.com/bcakmakoglu/vue-flow/pull/1149) [`d11e59f1`](https://github.com/bcakmakoglu/vue-flow/commit/d11e59f1869ab34e3b52b6593806f29fa8d510d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow adding edges with missing source or target node to state but don't render them unless source and target exist

- [#1146](https://github.com/bcakmakoglu/vue-flow/pull/1146) [`6f93bbbb`](https://github.com/bcakmakoglu/vue-flow/commit/6f93bbbba077cf65062ad7cc878d362c9827ccd1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use viewport and vueflow refs directly from store instead of assigning valuesafter mount

- [#1128](https://github.com/bcakmakoglu/vue-flow/pull/1128) [`0ff65bf2`](https://github.com/bcakmakoglu/vue-flow/commit/0ff65bf2abc51612969bd4a0d0ebed44c59171f8) Thanks [@github-actions](https://github.com/apps/github-actions)! - Use nodes from state as the default third arg for `getIntersectingNodes`

### Patch Changes

- [#1128](https://github.com/bcakmakoglu/vue-flow/pull/1128) [`7d153860`](https://github.com/bcakmakoglu/vue-flow/commit/7d1538606c7f4d77d1828a9ad31c0164eb0d6418) Thanks [@github-actions](https://github.com/apps/github-actions)! - Use correct filter for pan on scroll class name

- [#1147](https://github.com/bcakmakoglu/vue-flow/pull/1147) [`6bc391c6`](https://github.com/bcakmakoglu/vue-flow/commit/6bc391c693bcb9c6b123523cbc3e67fe0ac33fcc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Release apply default handlers when scope is disposed

- [#1146](https://github.com/bcakmakoglu/vue-flow/pull/1146) [`6f93bbbb`](https://github.com/bcakmakoglu/vue-flow/commit/6f93bbbba077cf65062ad7cc878d362c9827ccd1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow panning while pan key is pressed

- [#1139](https://github.com/bcakmakoglu/vue-flow/pull/1139) [`eee9bd87`](https://github.com/bcakmakoglu/vue-flow/commit/eee9bd87ad520c6c44526e393c698d05dd1924b0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Create a key predicate for string key filters and check if we need to use `event.key` or `event.code` to match the key

- [#1128](https://github.com/bcakmakoglu/vue-flow/pull/1128) [`f5138157`](https://github.com/bcakmakoglu/vue-flow/commit/f5138157937e51e2952f7b5708124d5cf76903f9) Thanks [@github-actions](https://github.com/apps/github-actions)! - select nodes on click when nodeDragThreshold > 0

- [#1149](https://github.com/bcakmakoglu/vue-flow/pull/1149) [`a7fe412a`](https://github.com/bcakmakoglu/vue-flow/commit/a7fe412a9111493f6363f40ee1838578a8739771) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Push component emit handlers into the emit fns set instead of using the `on` helper which overwrites any existing default handlers

- [#1128](https://github.com/bcakmakoglu/vue-flow/pull/1128) [`84e98305`](https://github.com/bcakmakoglu/vue-flow/commit/84e98305b1448b1325784497e058c66d23ed7ade) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update to use vue 3.3

## 1.23.0

### Minor Changes

- [#1121](https://github.com/bcakmakoglu/vue-flow/pull/1121) [`5b9340bd`](https://github.com/bcakmakoglu/vue-flow/commit/5b9340bd1dd46a76767b57ddf14a00dc9168bee2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow using `expandParent` together with `parent` extent

- [#1117](https://github.com/bcakmakoglu/vue-flow/pull/1117) [`7c6daff7`](https://github.com/bcakmakoglu/vue-flow/commit/7c6daff776b3f43824126c71cfe8851212923d68) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `getIncomers`, `getOutgoers` and `getConnectedEdges` as store actions

- [#1115](https://github.com/bcakmakoglu/vue-flow/pull/1115) [`2bc9317c`](https://github.com/bcakmakoglu/vue-flow/commit/2bc9317cc2f69977f76d7fb562e82954f8946972) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Cleanup node handlebounds when a handle is unmounted

- [#1112](https://github.com/bcakmakoglu/vue-flow/pull/1112) [`e526139f`](https://github.com/bcakmakoglu/vue-flow/commit/e526139f0b21b63eee920db6d135f17bb3661072) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `nodeDragThreshold` option

- [#1118](https://github.com/bcakmakoglu/vue-flow/pull/1118) [`5802acc9`](https://github.com/bcakmakoglu/vue-flow/commit/5802acc90b8b273dd50b07c586a80f171d351e85) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `areNodesInitialized` gettet to store

- [#1106](https://github.com/bcakmakoglu/vue-flow/pull/1106) [`5c1df240`](https://github.com/bcakmakoglu/vue-flow/commit/5c1df240bac46fd7034eb816bd42bf35834628c7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add source and target node ids to edge removal changes

- [#1119](https://github.com/bcakmakoglu/vue-flow/pull/1119) [`78cf8bb0`](https://github.com/bcakmakoglu/vue-flow/commit/78cf8bb029e66d9f70d30fda3fea5f47e4c05152) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - add `flowToScreenCoordinate` & `screenToFlowCoordinate` to viewport actions

- [#1116](https://github.com/bcakmakoglu/vue-flow/pull/1116) [`8a29faa8`](https://github.com/bcakmakoglu/vue-flow/commit/8a29faa8292fc1ff5fdf7673b5759695c2be5f86) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing a number as connectable prop to allow a specific number of connections per handle

### Patch Changes

- [#1120](https://github.com/bcakmakoglu/vue-flow/pull/1120) [`4015e358`](https://github.com/bcakmakoglu/vue-flow/commit/4015e358316bba03423bf05f52075c6e15e5ffc1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Respect pan on scroll class name

- [#1122](https://github.com/bcakmakoglu/vue-flow/pull/1122) [`59171593`](https://github.com/bcakmakoglu/vue-flow/commit/59171593286c2fe50de016fa70a570a987a26478) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - disable panning when `panOnDrag` is `false`

- [#1110](https://github.com/bcakmakoglu/vue-flow/pull/1110) [`03247e00`](https://github.com/bcakmakoglu/vue-flow/commit/03247e0088cf46738ba4e88a7b97ec8a12dbc61e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - unselect edge if selected and multi-selection is active

- [#1123](https://github.com/bcakmakoglu/vue-flow/pull/1123) [`2f7a0fe1`](https://github.com/bcakmakoglu/vue-flow/commit/2f7a0fe1233f0aa44ddb3ef2f8469189cdc493bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Queue node dimensions update to next tick

## 1.22.3

### Patch Changes

- [#1064](https://github.com/bcakmakoglu/vue-flow/pull/1064) [`07387ebe`](https://github.com/bcakmakoglu/vue-flow/commit/07387ebef39c086d2d3cc51a51ea3f7eecec5016) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - fix smooth step edge horizontally or vertically aligned nodes

- [#1082](https://github.com/bcakmakoglu/vue-flow/pull/1082) [`e3cc6ddf`](https://github.com/bcakmakoglu/vue-flow/commit/e3cc6ddf84d824be3e47952dbaa07cc610f7fa03) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix scroll speed when using Control btn on windows

- [#1081](https://github.com/bcakmakoglu/vue-flow/pull/1081) [`0d36d4cd`](https://github.com/bcakmakoglu/vue-flow/commit/0d36d4cdd991395c33c2e2248a9d4ba3f9d42538) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use os specific key defaults (Windows -> Control, Mac -> Meta)

- [#1065](https://github.com/bcakmakoglu/vue-flow/pull/1065) [`05821407`](https://github.com/bcakmakoglu/vue-flow/commit/0582140773675df8fd117712d3837e89edb0f546) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add role `img` to edges if not focusable

- [#1083](https://github.com/bcakmakoglu/vue-flow/pull/1083) [`13d2e2cb`](https://github.com/bcakmakoglu/vue-flow/commit/13d2e2cb75d165a67d0412df5964ea6b01dfbb42) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Improve smoothstep edge label positioning

- [#1082](https://github.com/bcakmakoglu/vue-flow/pull/1082) [`e3cc6ddf`](https://github.com/bcakmakoglu/vue-flow/commit/e3cc6ddf84d824be3e47952dbaa07cc610f7fa03) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix horizontal scroll on windows

- [#1085](https://github.com/bcakmakoglu/vue-flow/pull/1085) [`03715134`](https://github.com/bcakmakoglu/vue-flow/commit/0371513440ce0cc4a524fc844947fb0d69c2842b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Clear pressed key on keyup event, so that key combinations only work while simulteanously pressing keys

- [#1084](https://github.com/bcakmakoglu/vue-flow/pull/1084) [`806f2632`](https://github.com/bcakmakoglu/vue-flow/commit/806f263217906258982d96039d98b019642b63ad) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing key combinations as a simple string instead of wrapping in an array

- [#1086](https://github.com/bcakmakoglu/vue-flow/pull/1086) [`641b4d75`](https://github.com/bcakmakoglu/vue-flow/commit/641b4d7521409ad9754f776f46c983e4c9972493) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reset isPressed value when switching from a boolean keyFilter to another type of keyFilter

## 1.22.2

### Patch Changes

- [#1055](https://github.com/bcakmakoglu/vue-flow/pull/1055) [`50059483`](https://github.com/bcakmakoglu/vue-flow/commit/500594831faabf47758e20178ab80f88110036ef) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if viewport transform is defined before setting in `fromObj` action

## 1.22.1

### Patch Changes

- [#1048](https://github.com/bcakmakoglu/vue-flow/pull/1048) [`b230e2ab`](https://github.com/bcakmakoglu/vue-flow/commit/b230e2ab1ac354f38b8919017609d85d8215e27f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Deprecate `position` and `zoom` props on `FlowExportObj` and replace with `viewport`

- [#1054](https://github.com/bcakmakoglu/vue-flow/pull/1054) [`543423c2`](https://github.com/bcakmakoglu/vue-flow/commit/543423c213e717a76ed7796453a37bb858d63b03) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - ESC key press causing browser error when blur on nodeEl is called

- [#1048](https://github.com/bcakmakoglu/vue-flow/pull/1048) [`b230e2ab`](https://github.com/bcakmakoglu/vue-flow/commit/b230e2ab1ac354f38b8919017609d85d8215e27f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait for viewport helper when calling `fromObject` action

## 1.22.0

### Minor Changes

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`080d8f41`](https://github.com/bcakmakoglu/vue-flow/commit/080d8f414f915d7a00017a0a2b4fcc67bac7e7ef) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Deprecate `getTransform` and `setTransform` and add `getViewport` and `setViewport` instead

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`763ea593`](https://github.com/bcakmakoglu/vue-flow/commit/763ea5930bc01d01b53314f68e5d51b674b44ac5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `hasListener` to event hook objects to check if any listeners are bound

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`4c191dfe`](https://github.com/bcakmakoglu/vue-flow/commit/4c191dfe8ce109738efdc66b2d6d503011936d00) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Return promises from viewport actions that are resolved when the transition of the action has ended

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`5d08d68a`](https://github.com/bcakmakoglu/vue-flow/commit/5d08d68a3cc8417785b835534a19376545d7b113) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add flag to `removeNodes` which allows recursively removing all child nodes of a parent

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`5d08d68a`](https://github.com/bcakmakoglu/vue-flow/commit/5d08d68a3cc8417785b835534a19376545d7b113) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing string or `{ id }` type object to `getIncomers` and `getOutgoers`

### Patch Changes

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`080d8f41`](https://github.com/bcakmakoglu/vue-flow/commit/080d8f414f915d7a00017a0a2b4fcc67bac7e7ef) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Do not wait for the nodes initialized hook to trigger for viewport helper to become ready

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`5e1802ca`](https://github.com/bcakmakoglu/vue-flow/commit/5e1802caa42161903d8a4f8a7265f6fa5a65d342) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Destroy state when the creating scope is disposed.

- [#1034](https://github.com/bcakmakoglu/vue-flow/pull/1034) [`afd1d235`](https://github.com/bcakmakoglu/vue-flow/commit/afd1d235099b5034ad317f32c6f5658fb9b5115a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Watch `applyDefault` state in `useVueFlow` scope instead of component scope otherwise adding nodes/edges to the state is impossible until the `VueFlow` component has mounted unless the changes handlers are explicitly bound by the user.

## 1.21.3

### Patch Changes

- [#1033](https://github.com/bcakmakoglu/vue-flow/pull/1033) [`8585dd53`](https://github.com/bcakmakoglu/vue-flow/commit/8585dd535f370fdaf0ef60d7035031242f34645f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct handle position as source x,y position of connection lines

- [#1041](https://github.com/bcakmakoglu/vue-flow/pull/1041) [`373a345c`](https://github.com/bcakmakoglu/vue-flow/commit/373a345cd3000fa28ac80e00b9e60c139cfa1f8d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Abort fit view when there are no nodes to fit around

- [#1033](https://github.com/bcakmakoglu/vue-flow/pull/1033) [`8585dd53`](https://github.com/bcakmakoglu/vue-flow/commit/8585dd535f370fdaf0ef60d7035031242f34645f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct source handle type to be possibly null when passing as prop to custom connection line components

## 1.21.2

### Patch Changes

- [#1024](https://github.com/bcakmakoglu/vue-flow/pull/1024) [`df1c5322`](https://github.com/bcakmakoglu/vue-flow/commit/df1c53225689ed590f1d84bd9d5b64fe4aca2654) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use flush timing when calculating node positions

- [#1028](https://github.com/bcakmakoglu/vue-flow/pull/1028) [`3e11c6f0`](https://github.com/bcakmakoglu/vue-flow/commit/3e11c6f059543ba3f5bfc60643a749fafa66e57e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use noop functions instead of waiting for promise to be resolved when triggering viewport actions like fitView, setCenter etc.

- [#1031](https://github.com/bcakmakoglu/vue-flow/pull/1031) [`7fcf9c1f`](https://github.com/bcakmakoglu/vue-flow/commit/7fcf9c1ffc4e46e592aeee44af87710c73f567a4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass missing handle dom node to valid handle result obj

- [#1025](https://github.com/bcakmakoglu/vue-flow/pull/1025) [`ec6765c2`](https://github.com/bcakmakoglu/vue-flow/commit/ec6765c2a432a3f09425f4e9b9c044a1cf7bc011) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connection line status prop type. Can be string or null.

## 1.21.1

### Patch Changes

- [#1018](https://github.com/bcakmakoglu/vue-flow/pull/1018) [`c14941a1`](https://github.com/bcakmakoglu/vue-flow/commit/c14941a1c577a0b1a17e4d334e416659edd0fe36) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct nested nodes position calculation

## 1.21.0

### Minor Changes

- [#988](https://github.com/bcakmakoglu/vue-flow/pull/988) [`cfd33294`](https://github.com/bcakmakoglu/vue-flow/commit/cfd332942e3a31e309cb11cca54a384b64b8004b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Expose template refs from base edge component

- [#1013](https://github.com/bcakmakoglu/vue-flow/pull/1013) [`159bc763`](https://github.com/bcakmakoglu/vue-flow/commit/159bc763478399c03ee78a87be90bab20ef0ae5f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Resolve slot templates before falling back to default node/edge components

### Patch Changes

- [#1013](https://github.com/bcakmakoglu/vue-flow/pull/1013) [`159bc763`](https://github.com/bcakmakoglu/vue-flow/commit/159bc763478399c03ee78a87be90bab20ef0ae5f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Deprecate template prop for nodes

- [#1014](https://github.com/bcakmakoglu/vue-flow/pull/1014) [`02d2dd58`](https://github.com/bcakmakoglu/vue-flow/commit/02d2dd58d3b31511a80c724f6297e43acc2d3d07) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Clamp node extent by node dimensions to avoid node overflowing the extent by its size

- [#988](https://github.com/bcakmakoglu/vue-flow/pull/988) [`d6d4d5c7`](https://github.com/bcakmakoglu/vue-flow/commit/d6d4d5c7bf99744d000336fd1cf0ae89b5731153) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Priotize handle below during handle lookup

- [#988](https://github.com/bcakmakoglu/vue-flow/pull/988) [`f5cfab61`](https://github.com/bcakmakoglu/vue-flow/commit/f5cfab617fd8cde1a4a10f6112f00238c3e3e4f9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add style and ref to base edge props to avoid volar ts error

## 1.20.2

### Patch Changes

- [#993](https://github.com/bcakmakoglu/vue-flow/pull/993) [`98875dd5`](https://github.com/bcakmakoglu/vue-flow/commit/98875dd54fdff2b2793d29ee77d363aedceb34f9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct handle position calculation during lookup

- [#994](https://github.com/bcakmakoglu/vue-flow/pull/994) [`89972a90`](https://github.com/bcakmakoglu/vue-flow/commit/89972a90465ad0a3ffc7c6f82b39d385cc205d02) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Consider handle dimensions when calculating distance

- [#993](https://github.com/bcakmakoglu/vue-flow/pull/993) [`3585c473`](https://github.com/bcakmakoglu/vue-flow/commit/3585c4735b2fb558b7617d924264149100d92859) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Trigger connect if connection end handle is stored in state

- [#981](https://github.com/bcakmakoglu/vue-flow/pull/981) [`e68c1700`](https://github.com/bcakmakoglu/vue-flow/commit/e68c17003b2c993797eac1230da635adc84078c2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set interaction edge (invisible overlay path) to no animation to avoid breaking pointer on hover

- [#993](https://github.com/bcakmakoglu/vue-flow/pull/993) [`9ca41aa0`](https://github.com/bcakmakoglu/vue-flow/commit/9ca41aa01d1d943460dfea059b1ea05982ee2b6f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use isValidHandle with null as closest handle when none can be found

- [#992](https://github.com/bcakmakoglu/vue-flow/pull/992) [`4539f698`](https://github.com/bcakmakoglu/vue-flow/commit/4539f698e00457debcc9a1647c632a4ff7aa4236) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connection line path calculation

- [#993](https://github.com/bcakmakoglu/vue-flow/pull/993) [`9ca41aa0`](https://github.com/bcakmakoglu/vue-flow/commit/9ca41aa01d1d943460dfea059b1ea05982ee2b6f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reset connection end handle state on connection end

- [#976](https://github.com/bcakmakoglu/vue-flow/pull/976) [`0686bb5e`](https://github.com/bcakmakoglu/vue-flow/commit/0686bb5e4c1570a87e8212697cf04f8fc4f39b33) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wrap each edge element in a separate svg container to allow changing z-index of edges without causing a re-render on all of them.

## 1.20.1

### Patch Changes

- [#943](https://github.com/bcakmakoglu/vue-flow/pull/943) [`22b53569`](https://github.com/bcakmakoglu/vue-flow/commit/22b53569619628006470747a8bb206b034719864) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fetch current node in drag handler, fixes drag handler using outdated node obj when it has been overwritten

- [#961](https://github.com/bcakmakoglu/vue-flow/pull/961) [`2f75b31c`](https://github.com/bcakmakoglu/vue-flow/commit/2f75b31c388368aede2e249b38dd3f1409942c8d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid inserting invalid nodes into state and throw error msg if invalid node is passed

- [#956](https://github.com/bcakmakoglu/vue-flow/pull/956) [`90e4cf99`](https://github.com/bcakmakoglu/vue-flow/commit/90e4cf99f1fc082808f11389917d0f86e0f66d1c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing a MaybeComputedRef type as `isValidConnection` arg for `useHandle` composable

- [#954](https://github.com/bcakmakoglu/vue-flow/pull/954) [`402da363`](https://github.com/bcakmakoglu/vue-flow/commit/402da3630b83fca664ff2dba6625538b4de5bb9e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use all handles in connection radius and select closest one that is valid

- [#951](https://github.com/bcakmakoglu/vue-flow/pull/951) [`b81069e5`](https://github.com/bcakmakoglu/vue-flow/commit/b81069e5473e56c82cdf96c0607cdedae7fc4d78) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set default viewport type as partial

## 1.20.0

### Minor Changes

- [#931](https://github.com/bcakmakoglu/vue-flow/pull/931) [`ecb9b540`](https://github.com/bcakmakoglu/vue-flow/commit/ecb9b540c64d6470ddc61db6a76e544d8b715645) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `parent` class name to parent nodes

- [#931](https://github.com/bcakmakoglu/vue-flow/pull/931) [`2e0484b7`](https://github.com/bcakmakoglu/vue-flow/commit/2e0484b77873a416c9d3ce78c7fe3b169d905910) Thanks [@github-actions](https://github.com/apps/github-actions)! - Allow passing a single element to `removeNodes` and `removeEdges` actions

- [#931](https://github.com/bcakmakoglu/vue-flow/pull/931) [`11210b4c`](https://github.com/bcakmakoglu/vue-flow/commit/11210b4cd0936ad627c0e693d32a00b317fbac43) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add id prop to BaseEdge component and pass id to the edge path

- [#939](https://github.com/bcakmakoglu/vue-flow/pull/939) [`fc68db2d`](https://github.com/bcakmakoglu/vue-flow/commit/fc68db2d81a771f1477c226b5e49fa61a2b28767) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `fromObject` function to load a graph from a flow export obj

- [#931](https://github.com/bcakmakoglu/vue-flow/pull/931) [`0a090681`](https://github.com/bcakmakoglu/vue-flow/commit/0a090681f716b02daad0d3c0752c35281e1ddcfe) Thanks [@github-actions](https://github.com/apps/github-actions)! - Allow passing a single element to `addNodes` or `addEdges` actions

- [#931](https://github.com/bcakmakoglu/vue-flow/pull/931) [`aef0ec51`](https://github.com/bcakmakoglu/vue-flow/commit/aef0ec517a6f6061d84c7e9f371102481b52ed63) Thanks [@github-actions](https://github.com/apps/github-actions)! - When handles are on top of each other, try to pick the one closest to center and/or one that is of type target

### Patch Changes

- [#941](https://github.com/bcakmakoglu/vue-flow/pull/941) [`a840e73b`](https://github.com/bcakmakoglu/vue-flow/commit/a840e73b0d19a866b6997dea5ed1dc0b37ec8790) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Do not render edges that are connected to a hidden node

## 1.19.4

### Patch Changes

- [#924](https://github.com/bcakmakoglu/vue-flow/pull/924) [`f292bfd6`](https://github.com/bcakmakoglu/vue-flow/commit/f292bfd6f246bd12492dcb8567d9b7cbc8c6c061) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if transform has changed in panBy before applying the new transform

- [#923](https://github.com/bcakmakoglu/vue-flow/pull/923) [`caafee4e`](https://github.com/bcakmakoglu/vue-flow/commit/caafee4e31eb7aaa03b25328ce7ab62bacc7a5d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly reset the store state when using `$reset` and retain reactivity of store state

## 1.19.3

### Patch Changes

- [#916](https://github.com/bcakmakoglu/vue-flow/pull/916) [`2dec266`](https://github.com/bcakmakoglu/vue-flow/commit/2dec2664d4b2353f95250c5dddd398d7e3be8591) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if node exists during drag

- [#910](https://github.com/bcakmakoglu/vue-flow/pull/910) [`cbb587f`](https://github.com/bcakmakoglu/vue-flow/commit/cbb587fb58f3752c49086ff2f6aea5aff336e72e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Emit pane mouse move event if no active selection exists

- [#909](https://github.com/bcakmakoglu/vue-flow/pull/909) [`e823aea`](https://github.com/bcakmakoglu/vue-flow/commit/e823aea747213dd616a6b3ef29098cc6f577d668) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Return bool from panBy and use the val to check if auto-pan should be triggered

- [#917](https://github.com/bcakmakoglu/vue-flow/pull/917) [`6c32065`](https://github.com/bcakmakoglu/vue-flow/commit/6c3206585ba5221077e7416bc9d2d108f4e5fe52) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent orphaned edge warning for edges with `deletable: false` when calculating max z-index of edges

- [#915](https://github.com/bcakmakoglu/vue-flow/pull/915) [`2cd746a`](https://github.com/bcakmakoglu/vue-flow/commit/2cd746a86d766d5b9668f1c82b16806a5ce9722b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass selectionKeyCode ref to useKeyPress

## 1.19.2

### Patch Changes

- [#899](https://github.com/bcakmakoglu/vue-flow/pull/899) [`24370a0`](https://github.com/bcakmakoglu/vue-flow/commit/24370a075567cf46a827112a8c16984ee15876a4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix focus,focus-visible and selected styles not using proper border colors

- [#889](https://github.com/bcakmakoglu/vue-flow/pull/889) [`56d7873`](https://github.com/bcakmakoglu/vue-flow/commit/56d787360210c1d57692a360695f222d5fe98b0a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set vue flow version as regular string instead of a ref

## 1.19.1

### Patch Changes

- [#883](https://github.com/bcakmakoglu/vue-flow/pull/883) [`ae7bd5a`](https://github.com/bcakmakoglu/vue-flow/commit/ae7bd5ac416f1d27864aa9334b91244221283593) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove defining css var in node type and use the default color of nodes as fallback for css var value

- [#876](https://github.com/bcakmakoglu/vue-flow/pull/876) [`e3de507`](https://github.com/bcakmakoglu/vue-flow/commit/e3de507ca1fc9570027d076e1876720f41e7f8e7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set default edge options prior to setting elements so the options are applied on initial render of edges as well.

## 1.19.0

### Minor Changes

- [#859](https://github.com/bcakmakoglu/vue-flow/pull/859) [`7faf36ac`](https://github.com/bcakmakoglu/vue-flow/commit/7faf36ac4a294f7d240b754f8c12cb63aca6c88d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow CoordinateExtent as range for extended node extent

- [#864](https://github.com/bcakmakoglu/vue-flow/pull/864) [`ae41b298`](https://github.com/bcakmakoglu/vue-flow/commit/ae41b298ce312eb02aaaad3a07484bd5bc8a35cd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing node ids as string array to `getConnectedEdges`

- [#856](https://github.com/bcakmakoglu/vue-flow/pull/856) [`f9b17f2a`](https://github.com/bcakmakoglu/vue-flow/commit/f9b17f2ae597cf7db61673d25809fc4d2c090159) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `getConnectedNodes` utility function

- [#856](https://github.com/bcakmakoglu/vue-flow/pull/856) [`a937af66`](https://github.com/bcakmakoglu/vue-flow/commit/a937af66985b2f2eefec8cb06cc99786172ca0ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing undefined as id to `findNode` & `findEdge`

- [#859](https://github.com/bcakmakoglu/vue-flow/pull/859) [`4abd2919`](https://github.com/bcakmakoglu/vue-flow/commit/4abd2919b8772bcadbaed323f5851f9920ab66d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing plain number as padding for extent range

- [#862](https://github.com/bcakmakoglu/vue-flow/pull/862) [`dbcbe782`](https://github.com/bcakmakoglu/vue-flow/commit/dbcbe782165afc4484d3dae1891965315acd26ff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `ToGraphNode` and `ToGraphEdge` utility types

### Patch Changes

- [#863](https://github.com/bcakmakoglu/vue-flow/pull/863) [`c3991c75`](https://github.com/bcakmakoglu/vue-flow/commit/c3991c759eec40cf42c8b93d46b2b60dca9e5918) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing regular edge type to `getConnectedEdges`

- [#862](https://github.com/bcakmakoglu/vue-flow/pull/862) [`dbcbe782`](https://github.com/bcakmakoglu/vue-flow/commit/dbcbe782165afc4484d3dae1891965315acd26ff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `Type` generic to node types

- [#860](https://github.com/bcakmakoglu/vue-flow/pull/860) [`cc158716`](https://github.com/bcakmakoglu/vue-flow/commit/cc158716b38634861f6a8a9cb30b5e2ed3c9a3d6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Limit auto-pan when dragging a node by translate extent, so nodes cannot be dragged infinitely into the background.

- [#862](https://github.com/bcakmakoglu/vue-flow/pull/862) [`dbcbe782`](https://github.com/bcakmakoglu/vue-flow/commit/dbcbe782165afc4484d3dae1891965315acd26ff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Deprecate class and style funcs for node/edge types

- [#862](https://github.com/bcakmakoglu/vue-flow/pull/862) [`dbcbe782`](https://github.com/bcakmakoglu/vue-flow/commit/dbcbe782165afc4484d3dae1891965315acd26ff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `Type` generic to edge types

- [#865](https://github.com/bcakmakoglu/vue-flow/pull/865) [`9ce7bdc4`](https://github.com/bcakmakoglu/vue-flow/commit/9ce7bdc4908dda4dea299e5f469b252ac20a12ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `exports` field to package.json

## 1.18.2

### Patch Changes

- [#852](https://github.com/bcakmakoglu/vue-flow/pull/852) [`8f537196`](https://github.com/bcakmakoglu/vue-flow/commit/8f537196c1b9c0681870c212ccb29592ff9ffb01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set handle connectable prop to `undefined` as it's default value

## 1.18.1

### Patch Changes

- [#847](https://github.com/bcakmakoglu/vue-flow/pull/847) [`eee41ece`](https://github.com/bcakmakoglu/vue-flow/commit/eee41ece3ab58bd4572f73701917fed11f64ee19) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use connectionClickStartHandle for click connect

- [#847](https://github.com/bcakmakoglu/vue-flow/pull/847) [`25145030`](https://github.com/bcakmakoglu/vue-flow/commit/251450300f1637a69c0f04ec3f5d27a6ca59fd4a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove duplicate event bindings from handle

- [#843](https://github.com/bcakmakoglu/vue-flow/pull/843) [`6320e5e7`](https://github.com/bcakmakoglu/vue-flow/commit/6320e5e71ae03950b599db3a8f0136728e00f671) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add noPanClassName to handles

- [#844](https://github.com/bcakmakoglu/vue-flow/pull/844) [`6978468d`](https://github.com/bcakmakoglu/vue-flow/commit/6978468d2d68918e16e9d8607216242cb6b31ead) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow null values to be set for key codes

- [#843](https://github.com/bcakmakoglu/vue-flow/pull/843) [`6320e5e7`](https://github.com/bcakmakoglu/vue-flow/commit/6320e5e71ae03950b599db3a8f0136728e00f671) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use fallback for connectableStart and connectableEnd

## 1.18.0

### Minor Changes

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`74c64ff3`](https://github.com/bcakmakoglu/vue-flow/commit/74c64ff34dd3e22111274d8211cd625c9b70e497) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `clickConnectStart` and `clickConnectEnd` events

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`fb888b5f`](https://github.com/bcakmakoglu/vue-flow/commit/fb888b5f8bcd9e25a027601ce6295163951ef09e) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add type to edge updater anchor class

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`3cc8827c`](https://github.com/bcakmakoglu/vue-flow/commit/3cc8827c808271c4abdff14dd8464f0a4f767a58) Thanks [@github-actions](https://github.com/apps/github-actions)! - Add `connectableStart` and `connectableEnd` handle props. Can be used to enable/disable starting or ending a connection on a specific handle.

- [#840](https://github.com/bcakmakoglu/vue-flow/pull/840) [`34b5b7d2`](https://github.com/bcakmakoglu/vue-flow/commit/34b5b7d2fc37cc5a713e8ff94eab0d0aa7303ec5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add connection start and end handles to store state

- [#801](https://github.com/bcakmakoglu/vue-flow/pull/801) [`ae41dfac`](https://github.com/bcakmakoglu/vue-flow/commit/ae41dfac10ad790002c5d62b6e730797b18d48ff) Thanks [@github-actions](https://github.com/apps/github-actions)! - Do not remove orphaned edges from state. They will not be rendered but stay in the state, so a user can potentially fix the edge.

## 1.17.6

### Patch Changes

- [#833](https://github.com/bcakmakoglu/vue-flow/pull/833) [`02125c1`](https://github.com/bcakmakoglu/vue-flow/commit/02125c17441c7fe8e07a3b7490d591443eb17c19) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent flickering of graph by hiding transformation pane until next frame

- [#835](https://github.com/bcakmakoglu/vue-flow/pull/835) [`58d75b0`](https://github.com/bcakmakoglu/vue-flow/commit/58d75b09f8fa303706ad03ed7cb60a6f4df5565c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Reset node and edge state before the rest of the state when calling `$reset` to avoid throwing error

## 1.17.5

### Patch Changes

- [#825](https://github.com/bcakmakoglu/vue-flow/pull/825) [`50f1dff`](https://github.com/bcakmakoglu/vue-flow/commit/50f1dff9e0b76862f5c02efc5b3f2b10513d3194) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent handles with connectable `false` from being considered valid handles

- [#826](https://github.com/bcakmakoglu/vue-flow/pull/826) [`95dd1ae`](https://github.com/bcakmakoglu/vue-flow/commit/95dd1aef34776f3cc92f90306d1087c42805ac67) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Unwrap `nodesConnectable` ref in onClick handler of handles

- [#828](https://github.com/bcakmakoglu/vue-flow/pull/828) [`184c273`](https://github.com/bcakmakoglu/vue-flow/commit/184c27392e07d9f5d9e290a8b1df996f89389103) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edges and connection line paths not matching up

## 1.17.4

### Patch Changes

- [`ffc2d17`](https://github.com/bcakmakoglu/vue-flow/commit/ffc2d17ab3201d69524f8e95797b57813256bdd7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix incorrect type export paths

## 1.17.3

### Patch Changes

- [#815](https://github.com/bcakmakoglu/vue-flow/pull/815) [`15cc769`](https://github.com/bcakmakoglu/vue-flow/commit/15cc7692c84a7cbd1af4c7850cc742662c292cf0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix object assign order when parsing node and edge obj

## 1.17.2

### Patch Changes

- [#810](https://github.com/bcakmakoglu/vue-flow/pull/810) [`3c06fdfb`](https://github.com/bcakmakoglu/vue-flow/commit/3c06fdfbf92b491e1be87077250949b82f1fd534) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make wheel and touchstart event listeners passive to avoid warnings

## 1.17.1

### Patch Changes

- [#799](https://github.com/bcakmakoglu/vue-flow/pull/799) [`b1e92195`](https://github.com/bcakmakoglu/vue-flow/commit/b1e92195e5679ecb74cd0edea43bfa5359727a5c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing emit definition for `error`

- [#796](https://github.com/bcakmakoglu/vue-flow/pull/796) [`54ea8a0d`](https://github.com/bcakmakoglu/vue-flow/commit/54ea8a0d0c6c95931cb2aeb0079751db6447df65) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix return type of `getIncomers` & `getOutgoers`

- [#793](https://github.com/bcakmakoglu/vue-flow/pull/793) [`c67e9391`](https://github.com/bcakmakoglu/vue-flow/commit/c67e939112fbc4003ab4164f8b7ea52aa44a718f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if node handle bounds exist in `getNodesInitialized`

- [#793](https://github.com/bcakmakoglu/vue-flow/pull/793) [`ef1c48ce`](https://github.com/bcakmakoglu/vue-flow/commit/ef1c48ce0a99f71efba197a2de613179a6891211) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use visible nodes to check if `onNodesInitialized` should be triggered

## 1.17.0

### Minor Changes

- [#785](https://github.com/bcakmakoglu/vue-flow/pull/785) [`7667aa60`](https://github.com/bcakmakoglu/vue-flow/commit/7667aa60b819cc7c545d5374e49cdc27d5004d5b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow passing objects with only `id` to `getConnectedEdges` nodes arg

- [#781](https://github.com/bcakmakoglu/vue-flow/pull/781) [`ad8c7897`](https://github.com/bcakmakoglu/vue-flow/commit/ad8c78977cd0e436e6f9602ecf5ea0805bf8ac13) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `onError` hook which allows handling vue flow errors by users. Will default to console.warn if no handler is passed

### Patch Changes

- [#783](https://github.com/bcakmakoglu/vue-flow/pull/783) [`b864c436`](https://github.com/bcakmakoglu/vue-flow/commit/b864c43677779782e98f5cb809a047f2dc5b0aff) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `stop` from `EdgeRenderer` as watcher has been removed and stop refers to `window.stop` which causes requests to be cancelled when VueFlow is unmounted

## 1.16.5

### Patch Changes

- [#780](https://github.com/bcakmakoglu/vue-flow/pull/780) [`cdaf1e99`](https://github.com/bcakmakoglu/vue-flow/commit/cdaf1e993ad3328f2659a4781214914ee78683bf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `Object.assign` when parsing node to avoid mutating the original object.

- [#770](https://github.com/bcakmakoglu/vue-flow/pull/770) [`f88faac7`](https://github.com/bcakmakoglu/vue-flow/commit/f88faac7d2849c596121519b5b417270f9cdfc3d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix non-passive wheel event listener violation

## 1.16.4

### Patch Changes

- [#765](https://github.com/bcakmakoglu/vue-flow/pull/765) [`12c84a80`](https://github.com/bcakmakoglu/vue-flow/commit/12c84a80365b48db758ccdd675a12744b18dbe1b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Unwrap refs in node wrapper

- [#765](https://github.com/bcakmakoglu/vue-flow/pull/765) [`12c84a80`](https://github.com/bcakmakoglu/vue-flow/commit/12c84a80365b48db758ccdd675a12744b18dbe1b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Rename `parentNode` prop for custom nodes to `parent` to avoid TypeError which occurs as `div` already has `parentNode` defined which cannot be overwritten

## 1.16.3

### Patch Changes

- [#756](https://github.com/bcakmakoglu/vue-flow/pull/756) [`47b03e75`](https://github.com/bcakmakoglu/vue-flow/commit/47b03e757152b7801c28d8eb3373a084bd2a16d8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing source and target position values on `GraphEdge` type objects if available

- [#759](https://github.com/bcakmakoglu/vue-flow/pull/759) [`35b0a0ac`](https://github.com/bcakmakoglu/vue-flow/commit/35b0a0acef11a1b63690c7490be28fe2ff62643b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use render fn for node wrapper. Fixes props being hyphanated instead of camelcase when passed to custom components.

## 1.16.2

### Patch Changes

- [#751](https://github.com/bcakmakoglu/vue-flow/pull/751) [`060202db`](https://github.com/bcakmakoglu/vue-flow/commit/060202db427cfbed47bff82ee1aeb0d2aa054ecb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use computed properties for edge class and style props

- [#750](https://github.com/bcakmakoglu/vue-flow/pull/750) [`e799cf6e`](https://github.com/bcakmakoglu/vue-flow/commit/e799cf6e3e660375ce8a1a7340873ab770b3e40e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct check if valid connection func was passed

## 1.16.1

### Patch Changes

- [#746](https://github.com/bcakmakoglu/vue-flow/pull/746) [`73a2b168`](https://github.com/bcakmakoglu/vue-flow/commit/73a2b16893b263d2fd64852b4e4acb0637a603ec) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Downgrade unplugin-auto-import to fix vue types issue

## 1.16.0

### Minor Changes

- [#745](https://github.com/bcakmakoglu/vue-flow/pull/745) [`01e91b68`](https://github.com/bcakmakoglu/vue-flow/commit/01e91b68f88467f5b1c190a12e69bd7f952849d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add handle validation result into store state

- [#744](https://github.com/bcakmakoglu/vue-flow/pull/744) [`1bc50add`](https://github.com/bcakmakoglu/vue-flow/commit/1bc50add8ba8ea2298319341f6d3bd73e9ca39ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass targetNode and targetHandle as props to custom connection lines

- [#740](https://github.com/bcakmakoglu/vue-flow/pull/740) [`a3ded51f`](https://github.com/bcakmakoglu/vue-flow/commit/a3ded51fa452e537c245768655368f089534091e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `clamp` utility

- [#745](https://github.com/bcakmakoglu/vue-flow/pull/745) [`01e91b68`](https://github.com/bcakmakoglu/vue-flow/commit/01e91b68f88467f5b1c190a12e69bd7f952849d2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `isValidConnection` prop to allow for validating edge updates or use a global validator for all handles

### Patch Changes

- [#740](https://github.com/bcakmakoglu/vue-flow/pull/740) [`a3ded51f`](https://github.com/bcakmakoglu/vue-flow/commit/a3ded51fa452e537c245768655368f089534091e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Force update node dimensions when ResizeObserver callback is triggered

## 1.15.5

### Patch Changes

- [#734](https://github.com/bcakmakoglu/vue-flow/pull/734) [`123ad512`](https://github.com/bcakmakoglu/vue-flow/commit/123ad5126a480e11735ff58d8f039385243a127f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if handle is connectable before trying to validate

- [#737](https://github.com/bcakmakoglu/vue-flow/pull/737) [`f2b3cd87`](https://github.com/bcakmakoglu/vue-flow/commit/f2b3cd874a4c3e3494e093afd2a5ca34c756864a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Blur node element after unselecting

## 1.15.4

### Patch Changes

- [#728](https://github.com/bcakmakoglu/vue-flow/pull/728) [`6b149ca6`](https://github.com/bcakmakoglu/vue-flow/commit/6b149ca69a634c2cc51138e01098dbdc0bdf6620) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Compare internal node dimensions against calculated ones when trying to update node dimensions

## 1.15.3

### Patch Changes

- [#720](https://github.com/bcakmakoglu/vue-flow/pull/720) [`bac0d735`](https://github.com/bcakmakoglu/vue-flow/commit/bac0d735b1df65945f12b866eb94eab4f7c70b01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove duplicate connectStart and connectEnd emits

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`18b934eb`](https://github.com/bcakmakoglu/vue-flow/commit/18b934eb9e4163c9188e6d81d618f67716c8ef5e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - prevent selecting nodes when node selectable is false

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`a4b0b6b7`](https://github.com/bcakmakoglu/vue-flow/commit/a4b0b6b799636deca171eb4d438901fe4af330a9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make shouldReplaceId arg in updateEdge optional

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`7a2f1c3b`](https://github.com/bcakmakoglu/vue-flow/commit/7a2f1c3b21dc9acb3d311176be63f0990894ce52) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add noPanClassName when node is draggable

- [#719](https://github.com/bcakmakoglu/vue-flow/pull/719) [`16bd9152`](https://github.com/bcakmakoglu/vue-flow/commit/16bd915214335af8ed3c82409836756e7dde6e35) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait until all nodes are initialized before triggering viewport actions

## 1.15.2

### Patch Changes

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix umd pkg names and use the correct vue flow core umd pkg name in plugins

- [#713](https://github.com/bcakmakoglu/vue-flow/pull/713) [`95b51a0e`](https://github.com/bcakmakoglu/vue-flow/commit/95b51a0e352e29305a12387ea03fa35ce7f16825) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent undefined being passed to updateNodeInternals

- [#712](https://github.com/bcakmakoglu/vue-flow/pull/712) [`76256439`](https://github.com/bcakmakoglu/vue-flow/commit/76256439bb59f2afb20a423b283d7232afece97f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix resize-observer throwing when node el doesn't exist but effect is run

- [#707](https://github.com/bcakmakoglu/vue-flow/pull/707) [`e8c383ff`](https://github.com/bcakmakoglu/vue-flow/commit/e8c383ffeffb306ca18d2acfaf145efba3e11fa1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix nodes not using zIndex option

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent writing `process.env` into umd build

- [#714](https://github.com/bcakmakoglu/vue-flow/pull/714) [`1fa4ee1b`](https://github.com/bcakmakoglu/vue-flow/commit/1fa4ee1b8faf25ce83c6c8f37fa35531c54eba0c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait until viewport helper is initialized before triggering viewport functions and pane ready event

## 1.15.1

### Patch Changes

- [#704](https://github.com/bcakmakoglu/vue-flow/pull/704) [`b3462f2`](https://github.com/bcakmakoglu/vue-flow/commit/b3462f22cb4bdeabb39f266ccc8879fa1b3ceae9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove export of `SelectionPane` as the component doesn't exist anymore

- [#703](https://github.com/bcakmakoglu/vue-flow/pull/703) [`0838d2c`](https://github.com/bcakmakoglu/vue-flow/commit/0838d2c46bdcf24b9f88a9ed2ce10f939b31fbfe) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Downgrade auto imports. Fixes broken type imports.

## 1.15.0

### Minor Changes

- [#684](https://github.com/bcakmakoglu/vue-flow/pull/684) [`a788cc0`](https://github.com/bcakmakoglu/vue-flow/commit/a788cc09421a9b39aff1ff44052be6feae00b7e9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add option to enable/disable replacing edge id when `updateEdge` action is used

- [#699](https://github.com/bcakmakoglu/vue-flow/pull/699) [`c1a7995`](https://github.com/bcakmakoglu/vue-flow/commit/c1a799592ee7fc116ee74fc6a083496ee5350629) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Omit internal properties when using `toObject`

### Patch Changes

- [#667](https://github.com/bcakmakoglu/vue-flow/pull/667) [`231271a`](https://github.com/bcakmakoglu/vue-flow/commit/231271a7dadaaee056e79e16f30d2f0755e51d53) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent layout shift on initial render by hiding viewport until initial nodes have width/height

- [#667](https://github.com/bcakmakoglu/vue-flow/pull/667) [`89198bd`](https://github.com/bcakmakoglu/vue-flow/commit/89198bdc29ed9dde6961190ac99eb30aebfbf474) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove Promises from viewport helper functions, will not await viewport anymore but instead return no-op functions if called too early

- [#695](https://github.com/bcakmakoglu/vue-flow/pull/695) [`616e795`](https://github.com/bcakmakoglu/vue-flow/commit/616e7951e51c112f29107621588a29b60a7d6e85) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use snapGrid values to clamp initial node positions

## 1.14.3

### Patch Changes

- [#671](https://github.com/bcakmakoglu/vue-flow/pull/671) [`c47bc5ce`](https://github.com/bcakmakoglu/vue-flow/commit/c47bc5ceb2ea9c739be5eef3291c1312fdbce824) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fit view on init is now triggered as soon as node dimensions are updated for the first time

- [#682](https://github.com/bcakmakoglu/vue-flow/pull/682) [`b08cb4d4`](https://github.com/bcakmakoglu/vue-flow/commit/b08cb4d45904c229d9ecda5e3cb477cbb7a6acaf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add compat mode to components to avoid breaking when used with @vue/compat

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow depr. connectionLineType to be null

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing straight type to connection line options

- [#680](https://github.com/bcakmakoglu/vue-flow/pull/680) [`70ae3410`](https://github.com/bcakmakoglu/vue-flow/commit/70ae341062072acab234ce9ee88b33d2866ef7b3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connections for handles that are bigger than the specified connection radius

- [#680](https://github.com/bcakmakoglu/vue-flow/pull/680) [`70ae3410`](https://github.com/bcakmakoglu/vue-flow/commit/70ae341062072acab234ce9ee88b33d2866ef7b3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always emit edge update event

- [`03edd46c`](https://github.com/bcakmakoglu/vue-flow/commit/03edd46cef18b246cca061e554b469a1cfbefa16) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix connection line not rendering properly when destructuring slot props

- [#681](https://github.com/bcakmakoglu/vue-flow/pull/681) [`d73995aa`](https://github.com/bcakmakoglu/vue-flow/commit/d73995aae1b14ea5cad4ee3764cff558344bcb34) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set `user-select: none` for edge labels

- [#668](https://github.com/bcakmakoglu/vue-flow/pull/668) [`d39c63e5`](https://github.com/bcakmakoglu/vue-flow/commit/d39c63e5f3ec54fb1de10d84a7271546d1b7e3e8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid re-rendering edges that have been deleted

## 1.14.2

### Patch Changes

- [#663](https://github.com/bcakmakoglu/vue-flow/pull/663) [`05a3e26e`](https://github.com/bcakmakoglu/vue-flow/commit/05a3e26e58ba19864ceb3858412f67d6af3099b7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Avoid triggering edge update when mouse button is not left

- [#658](https://github.com/bcakmakoglu/vue-flow/pull/658) [`b8ad4458`](https://github.com/bcakmakoglu/vue-flow/commit/b8ad4458c3efddabf8bdc8bb229bed16f5aaf63c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When `includeHiddenNodes` is false, exclude hidden nodes when using fitView

- [#660](https://github.com/bcakmakoglu/vue-flow/pull/660) [`0dbabfc5`](https://github.com/bcakmakoglu/vue-flow/commit/0dbabfc58b63c2776f56e916f40abcb7d3dc2ecb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use default values when defaultViewport vals are missing

## 1.14.1

### Patch Changes

- [#655](https://github.com/bcakmakoglu/vue-flow/pull/655) [`3d958dfe`](https://github.com/bcakmakoglu/vue-flow/commit/3d958dfe4f36702dd89ee456369c6090e22163e3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if prev closest handle exists in pointer up handler

- [#656](https://github.com/bcakmakoglu/vue-flow/pull/656) [`b3796a66`](https://github.com/bcakmakoglu/vue-flow/commit/b3796a66ea66386484e7b56726c9f40f69a4556f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Store connectionStatus when using connection actions

## 1.14.0

### Minor Changes

- [#654](https://github.com/bcakmakoglu/vue-flow/pull/654) [`99909f16`](https://github.com/bcakmakoglu/vue-flow/commit/99909f1660c337469abf7d6558be9de1b134074d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `VueFlowError` class which is used when throwing

- [#649](https://github.com/bcakmakoglu/vue-flow/pull/649) [`47bc8280`](https://github.com/bcakmakoglu/vue-flow/commit/47bc8280075935e3047ebd26714b5516e0bb522f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connectionStatus` to connection lines, which can be used to check if the connection line is used on a valid handle.

### Patch Changes

- [#650](https://github.com/bcakmakoglu/vue-flow/pull/650) [`aaf46dc2`](https://github.com/bcakmakoglu/vue-flow/commit/aaf46dc22ca8daa507e8e7eb7c3646bde158d8bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `valid` and `connecting` class names instead of `vue-flow__handle-valid` and `vue-flow__handle-connecting` (old class names kept for backwards compatibility but will be removed in the future)

- [#653](https://github.com/bcakmakoglu/vue-flow/pull/653) [`64e9dc3c`](https://github.com/bcakmakoglu/vue-flow/commit/64e9dc3c1eb00da2775f8d6e2d05d5fdbd6b4cdc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Draw connection lines to opposite position

- [#651](https://github.com/bcakmakoglu/vue-flow/pull/651) [`c0d172be`](https://github.com/bcakmakoglu/vue-flow/commit/c0d172bee56b95f3e5f2fc72f16836d0e3e16a91) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When a node is not draggable, avoid dragging it when using a selection box

- [#650](https://github.com/bcakmakoglu/vue-flow/pull/650) [`aaf46dc2`](https://github.com/bcakmakoglu/vue-flow/commit/aaf46dc22ca8daa507e8e7eb7c3646bde158d8bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix ios connection error

## 1.13.2

### Patch Changes

- [#643](https://github.com/bcakmakoglu/vue-flow/pull/643) [`210b702b`](https://github.com/bcakmakoglu/vue-flow/commit/210b702b5062a8c54883a866bd950d7e0ca6f314) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly access default edge options ref when passing options to the `connect` event

## 1.13.1

### Patch Changes

- [#641](https://github.com/bcakmakoglu/vue-flow/pull/641) [`f5eaa4cc`](https://github.com/bcakmakoglu/vue-flow/commit/f5eaa4cc534008731f2ffa90fe8f4cdbeabc238b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass missing valid connection function params

## 1.13.0

### Minor Changes

- [#639](https://github.com/bcakmakoglu/vue-flow/pull/639) [`ad2b09f1`](https://github.com/bcakmakoglu/vue-flow/commit/ad2b09f18ea1183a7d2a8725d8a637fec3c93871) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow setting `GraphNode` or `GraphEdge` type with a generic type

- [#629](https://github.com/bcakmakoglu/vue-flow/pull/629) [`c7cfcec7`](https://github.com/bcakmakoglu/vue-flow/commit/c7cfcec70a91a9c1a3ed6233be35adba103e9226) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connectionRadius` option to global options and handle props.
  You can use this option to set the radius at which a connection line will snap to the closest available handle.

- [#613](https://github.com/bcakmakoglu/vue-flow/pull/613) [`7abd0bfd`](https://github.com/bcakmakoglu/vue-flow/commit/7abd0bfdf38a65b27f5fed7dc5a44f65dea732d6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export edge center utils `getSimpleEdgeCenter` & `getBezierEdgeCenter` from core

- [#634](https://github.com/bcakmakoglu/vue-flow/pull/634) [`b59dd6a7`](https://github.com/bcakmakoglu/vue-flow/commit/b59dd6a7256a1f0eb51beb7ea581383089b5e0d4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add autopan options. Pans viewport on node drag and/or when drawing a connection line.

  ### Usage

  ```ts
  useVueFlow({
    autoPanOnNodeDrag: true,
    autoPanOnConnect: true,
  });
  ```

  ```vue
  <VueFlow
    v-model="elements"
    :autoPanOnNodeDrag="true"
    :autoPanOnConnect="true"
  />
  ```

- [#636](https://github.com/bcakmakoglu/vue-flow/pull/636) [`e1628ec6`](https://github.com/bcakmakoglu/vue-flow/commit/e1628ec6601e50a7bc212a2ece83877dee0e9e70) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Export `isGraphNode` and `isGraphEdge` typeguards

### Patch Changes

- [#634](https://github.com/bcakmakoglu/vue-flow/pull/634) [`b59dd6a7`](https://github.com/bcakmakoglu/vue-flow/commit/b59dd6a7256a1f0eb51beb7ea581383089b5e0d4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Throw warning if viewport dimensions are 0

## 1.12.7

### Patch Changes

- [#627](https://github.com/bcakmakoglu/vue-flow/pull/627) [`19360c52`](https://github.com/bcakmakoglu/vue-flow/commit/19360c52296273c561fa0656e3ccbe7b47ea4d72) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Hide node selection box when no selected nodes exist

## 1.12.6

### Patch Changes

- [#624](https://github.com/bcakmakoglu/vue-flow/pull/624) [`0bddb524`](https://github.com/bcakmakoglu/vue-flow/commit/0bddb5249e5054af946a43399fb69988c16dda98) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add warning when trying to duplicate an element or remove an element that does not exist

- [#626](https://github.com/bcakmakoglu/vue-flow/pull/626) [`449a3f2a`](https://github.com/bcakmakoglu/vue-flow/commit/449a3f2a51e6919a6eabd894c48ca9073eefc242) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `extent` option from `setNodes` & `addNodes` action. Extent should be passed to a node or set with the global option.

- [#626](https://github.com/bcakmakoglu/vue-flow/pull/626) [`449a3f2a`](https://github.com/bcakmakoglu/vue-flow/commit/449a3f2a51e6919a6eabd894c48ca9073eefc242) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use computed var to get current node in `useDrag`. Fixes issue where overwriting a node breaks drag handler.

## 1.12.5

### Patch Changes

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`512eb176`](https://github.com/bcakmakoglu/vue-flow/commit/512eb17640b72b9aa6b06844805cf2c13c1f475c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - If node extent is set to parent, wait until node is initialized to clamp position

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`512eb176`](https://github.com/bcakmakoglu/vue-flow/commit/512eb17640b72b9aa6b06844805cf2c13c1f475c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Regroup edges when nodes change and elevate edges on select is active

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`d79e2a42`](https://github.com/bcakmakoglu/vue-flow/commit/d79e2a420eb3eff2f0634751c71bf07afb6406cf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait for parent node to be initialized before applying an initial expansion of the parent node

- [#622](https://github.com/bcakmakoglu/vue-flow/pull/622) [`73de601f`](https://github.com/bcakmakoglu/vue-flow/commit/73de601f794e6339a9b6dbd4d39a3f11a624a47d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass initialized nodes in the `onNodesInitialized` hook

## 1.12.4

### Patch Changes

- [#619](https://github.com/bcakmakoglu/vue-flow/pull/619) [`3d482b77`](https://github.com/bcakmakoglu/vue-flow/commit/3d482b77032b2bdc6442751730ae694c9e798c29) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use timeout when clamping positions after nodes' extent has changed

- [#618](https://github.com/bcakmakoglu/vue-flow/pull/618) [`f1975ea7`](https://github.com/bcakmakoglu/vue-flow/commit/f1975ea71e6ebc37c7bc43472016eb45702e54aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Do not trigger ctx menu event on viewport when dragging with right mouse button

## 1.12.3

### Patch Changes

- [#616](https://github.com/bcakmakoglu/vue-flow/pull/616) [`b16e3564`](https://github.com/bcakmakoglu/vue-flow/commit/b16e3564708c5429ad594156341fa3e95f84d3b2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 4 & update deps

- [#615](https://github.com/bcakmakoglu/vue-flow/pull/615) [`d8fe5432`](https://github.com/bcakmakoglu/vue-flow/commit/d8fe5432adec9c185c87b0c1e4bf432d83a8362f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Support key combinations for keycodes.
  Combinations can be passed using an array of keycodes and concatenated with a plus sign.
  For example: `['A+B']` will trigger when A and B are pressed at the same time.

- [#614](https://github.com/bcakmakoglu/vue-flow/pull/614) [`580de340`](https://github.com/bcakmakoglu/vue-flow/commit/580de3405621fcf2811701186abbbc23bddf0a33) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Keep user selection on right click

## 1.12.2

### Patch Changes

- [#610](https://github.com/bcakmakoglu/vue-flow/pull/610) [`01040099`](https://github.com/bcakmakoglu/vue-flow/commit/010400992fdd01df694a06785fbacd339515f24e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always handle keyup events, instead of cancelling when focusing an input dom node

- [#611](https://github.com/bcakmakoglu/vue-flow/pull/611) [`8dbdcae2`](https://github.com/bcakmakoglu/vue-flow/commit/8dbdcae27d46679bca34cef105742517f364e485) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if position is a number when updating, instead of checking if the value is truthy. Fixes 0 values not being used when updating.

## 1.12.1

### Patch Changes

- [#607](https://github.com/bcakmakoglu/vue-flow/pull/607) [`45851080`](https://github.com/bcakmakoglu/vue-flow/commit/45851080ea54f5f7d16cc2d594e3a1efd35a3b58) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Place default slot content outside of viewport element

- [#605](https://github.com/bcakmakoglu/vue-flow/pull/605) [`e670f465`](https://github.com/bcakmakoglu/vue-flow/commit/e670f465c5afc66d2b56206190f3dc0afecdb5ea) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Let keydown event bubble up from node wrapper instead of preventing default

## 1.12.0

### Minor Changes

- [#600](https://github.com/bcakmakoglu/vue-flow/pull/600) [`072fd911`](https://github.com/bcakmakoglu/vue-flow/commit/072fd91181c0897ae78d0bd2d500959afa1f5fdb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `zIndex` option to nodes and edges. Allows defining stacking order of elements.

## 1.11.1

### Patch Changes

- [#597](https://github.com/bcakmakoglu/vue-flow/pull/597) [`749175b9`](https://github.com/bcakmakoglu/vue-flow/commit/749175b970791991763c84d7f219d41b679fc635) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focus` and `focus-visible` styles to avoid browser specific styles on default nodes

## 1.11.0

### Minor Changes

- [#595](https://github.com/bcakmakoglu/vue-flow/pull/595) [`0c784a2`](https://github.com/bcakmakoglu/vue-flow/commit/0c784a27a9c2bac15d7578ac1171f3203ddd2f65) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `deletable` option to nodes and edges. If set to false it will prevent nodes and edges to be removed when `removeNodes` or `removeEdges` is triggered

### Patch Changes

- [#593](https://github.com/bcakmakoglu/vue-flow/pull/593) [`da65c54`](https://github.com/bcakmakoglu/vue-flow/commit/da65c54b0dd722a3f8afa68aa56007871d892963) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent elements that have selectable disabled from being selected

- [#590](https://github.com/bcakmakoglu/vue-flow/pull/590) [`89d2415`](https://github.com/bcakmakoglu/vue-flow/commit/89d2415c6d038d753d00b774d3d67fd6995adbc7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Skip updating positions when `updateNodeInternals` is triggered - it will only update node dimensions (which can trigger a position update)

- [#590](https://github.com/bcakmakoglu/vue-flow/pull/590) [`72f9f1a`](https://github.com/bcakmakoglu/vue-flow/commit/72f9f1a06912976d8f9bc8614663a37b536004e5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use flush timing `pre` for NodeWrapper watchers

## 1.10.3

### Patch Changes

- [#586](https://github.com/bcakmakoglu/vue-flow/pull/586) [`c0f31a2`](https://github.com/bcakmakoglu/vue-flow/commit/c0f31a2b48e5bbab97778b2d88d18cd4418ea949) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Check if element is still in state before attempting removal when applying removal changes

## 1.10.2

### Patch Changes

- [#584](https://github.com/bcakmakoglu/vue-flow/pull/584) [`17cd5bc`](https://github.com/bcakmakoglu/vue-flow/commit/17cd5bc9eb189693b346d0722b330ccbca25bedb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set initial node position correctly after applying node extent

- [#583](https://github.com/bcakmakoglu/vue-flow/pull/583) [`0c25796`](https://github.com/bcakmakoglu/vue-flow/commit/0c25796967dec49ad9ba5ecce99c7e0bdc0c29aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix type exports using path alias instead of relative paths, which causes types to not be inferred on user-side

## 1.10.1

### Patch Changes

- [#581](https://github.com/bcakmakoglu/vue-flow/pull/581) [`ea5c35e`](https://github.com/bcakmakoglu/vue-flow/commit/ea5c35e5faea722acd31d835a1e716aa798f3b53) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Re-calculate position when node extent changes

## 1.10.0

### Minor Changes

- [#579](https://github.com/bcakmakoglu/vue-flow/pull/579) [`b8d3241`](https://github.com/bcakmakoglu/vue-flow/commit/b8d324184fdb974b96d1b54aa042835b7ce83482) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow setting `padding` option for `node.extent: 'parent'`

  Padding can be a `number[]` containing a maximum of 4 values.
  The values are applied in the same order as CSS padding: top, right, bottom, left.
  You can omit values at the end of the array, so `[10, 20]` is equivalent to `[10, 20, 10, 20]` etc.

  #### Usage

  ```js
  const nodes = ref([
    {
      id: "4",
      label: "Node 4",
      position: { x: 320, y: 200 },
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        width: "300px",
        height: "300px",
      },
    },
    {
      id: "4a",
      label: "Node 4a",
      position: { x: 15, y: 65 },
      class: "light",
      extent: {
        range: "parent",
        // apply 10 px padding to all four sides
        padding: [10],
      },
      parentNode: "4",
    },
  ]);
  ```

### Patch Changes

- [#578](https://github.com/bcakmakoglu/vue-flow/pull/578) [`c0d9018`](https://github.com/bcakmakoglu/vue-flow/commit/c0d901899cd46a4f26ec38001859fa5598f3c248) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow omitting width and height style properties for parent nodes when using `expandParent` on child nodes

## 1.9.4

### Patch Changes

- [#574](https://github.com/bcakmakoglu/vue-flow/pull/574) [`1160d3d`](https://github.com/bcakmakoglu/vue-flow/commit/1160d3d2fbbae1988c7d72c56a1adcab4b1a53dd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix props being undefined on first render of custom node and edge components

- [#574](https://github.com/bcakmakoglu/vue-flow/pull/574) [`1160d3d`](https://github.com/bcakmakoglu/vue-flow/commit/1160d3d2fbbae1988c7d72c56a1adcab4b1a53dd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove `nodes` property from `ConnectionLineProps` - use `getNodes` inside the component instead ⚠️

## 1.9.3

### Patch Changes

- [`5402c0e`](https://github.com/bcakmakoglu/vue-flow/commit/5402c0ec211ee4d372911e17af9c5aef49656a85) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct aria live class names for vue-flow

## 1.9.2

### Patch Changes

- [#566](https://github.com/bcakmakoglu/vue-flow/pull/566) [`b324a06`](https://github.com/bcakmakoglu/vue-flow/commit/b324a06066c6a9af9ed0e1ff789d31c8a22982f4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge component prop types

## 1.9.1

### Patch Changes

- [#561](https://github.com/bcakmakoglu/vue-flow/pull/561) [`2979feb`](https://github.com/bcakmakoglu/vue-flow/commit/2979feb581c219ddb9fe1f87ff2c5fb4348e9bea) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix slots type regression

## 1.9.0

### Minor Changes

- [#557](https://github.com/bcakmakoglu/vue-flow/pull/557) [`c7897a1`](https://github.com/bcakmakoglu/vue-flow/commit/c7897a1da80a0e22c6e286706de8193db293f433) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow customizing the controls of the viewport and the selection box.

  #### Props

  - `selectionKeyCode`: You can now set this to `MaybeRef<boolean>` to enable a selection box without extra button press (need to set `:pan-on-drag="false"` or `:pan-on-drag="[2]"`[RightClick]).
  - `panOnDrag`: Can now be a boolean or a number[], this allows you to configure every mouse button as a drag button. [1, 2] would mean that you can drag via middle and right mouse button.
  - `panActivationKeyCode`: Key code (or KeyFilter) for activating dragging (useful when using selectionOnDrag).
  - `selectionMode`: You can choose if the selection box needs to contain a node fully (`SelectionMode.Full`) or partially (`SelectionMode.Partial`) to select.

  #### Events

  - `onSelectionStart`: Emitted when the selection box is started.
  - `onSelectionEnd`: Emitted when the selection box is ended.
  - `onViewportChangeStart`: Emitted when viewport change has started.
  - `onViewportChange`: Emitted when viewport is changed.
  - `onViewportChangeEnd`: Emitted when viewport change has ended.

### Patch Changes

- [#558](https://github.com/bcakmakoglu/vue-flow/pull/558) [`bac9893`](https://github.com/bcakmakoglu/vue-flow/commit/bac98930da15fe049ab8f1ac65f09dd67e0000fb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - ⚠️ Deprecate options API utils `addEdge` and `updateEdge`. These utils will be removed soon!

  #### Resolve deprecation warnings

  Instead of using these utils, use `addEdges` and `updateEdge` found on the VueFlow store instance.
  You receive a store instance by using either a template-ref or listening to the `onPaneReady` event.

  ### Example

  ```vue
  <script>
  import { VueFlow } from "@vue-flow/core";

  export default defineComponent({
    name: "OptionsAPIExample",
    components: { VueFlow },
    data() {
      return {
        vueFlow: null,
        instance: null,
        elements: [
          {
            id: "1",
            type: "input",
            label: "Node 1",
            position: { x: 250, y: 5 },
            class: "light",
          },
          {
            id: "2",
            label: "Node 2",
            position: { x: 100, y: 100 },
            class: "light",
          },
          {
            id: "3",
            label: "Node 3",
            position: { x: 400, y: 100 },
            class: "light",
          },
          {
            id: "4",
            label: "Node 4",
            position: { x: 400, y: 200 },
            class: "light",
          },
          { id: "e1-2", source: "1", target: "2", animated: true },
          { id: "e1-3", source: "1", target: "3" },
        ],
      };
    },
    methods: {
      // You can listen to `onPaneReady` to get the instance
      onPaneReady(instance) {
        instance.fitView();
        this.instance = instance;
      },
      onConnect(params) {
        // either use the instance you have saved in `onPaneReady`
        this.instance?.addEdges([params]);

        // or use the template-ref
        this.$refs.vueFlow?.addEdges([params]);
      },
    },
  });
  </script>

  <template>
    <VueFlow
      v-model="elements"
      ref="vueFlow"
      class="vue-flow-basic-example"
      :default-zoom="1.5"
      :min-zoom="0.2"
      :max-zoom="4"
      :zoom-on-scroll="false"
      @connect="onConnect"
      @pane-ready="onPaneReady"
    />
  </template>
  ```

- [#557](https://github.com/bcakmakoglu/vue-flow/pull/557) [`c7897a1`](https://github.com/bcakmakoglu/vue-flow/commit/c7897a1da80a0e22c6e286706de8193db293f433) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add a11y support to selection box

## 1.8.0

### Minor Changes

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add keyboard controls to node wrapper (a11y)

- [#554](https://github.com/bcakmakoglu/vue-flow/pull/554) [`9e7f65a`](https://github.com/bcakmakoglu/vue-flow/commit/9e7f65aaa05f5a5f03dbd49657bba25b8e57813d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Merge `defaultZoom` & `defaultPosition` into `defaultViewport` object

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `disableKeyboardA11y` option to VueFlow props and store options

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focusable` option to edge types

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `ariaLabel` option to edge type

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `edgesFocusable` option to store

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `nodesFocusable` option to VueFlow props and store options

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `pathOptions` to Bezier and Smoothstep edge types

### Patch Changes

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `ariaLabel` option to node type

- [#554](https://github.com/bcakmakoglu/vue-flow/pull/554) [`545ab07`](https://github.com/bcakmakoglu/vue-flow/commit/545ab079ba7decf77aa67e8db0d5b2eca8a62b40) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Clamp invalid zoom values

- [#556](https://github.com/bcakmakoglu/vue-flow/pull/556) [`699d786`](https://github.com/bcakmakoglu/vue-flow/commit/699d7861ced2d304e74bf5fc7dfb9269ad4ca115) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent `expandParent` option from changing parent nodes position while expanding

- [#553](https://github.com/bcakmakoglu/vue-flow/pull/553) [`cd4e056`](https://github.com/bcakmakoglu/vue-flow/commit/cd4e0564c119b42251356b9272acd154f6d3c6f3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Rename `viewpane` to `viewport` -> `ViewpaneTransform` now `ViewportTransform`

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`cf46cc8`](https://github.com/bcakmakoglu/vue-flow/commit/cf46cc88b3a51173b8ccc3710243cb11ba5fbc6a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `focusable` option to node type

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `vueFlowId` to `getMarkerId` to uniquely identify markers across multiple vue flow instances

- [#544](https://github.com/bcakmakoglu/vue-flow/pull/544) [`2341b9b`](https://github.com/bcakmakoglu/vue-flow/commit/2341b9bf157aae32415f897b6e8d21c7b24aa139) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update `EdgeRef` injection type to `SVGElement`

### A11y

This release brings A11y support to Vue Flow. All nodes and edges can now receive a `focusable` and `ariaLabel` prop, which can be used to enhance A11y experience. You can also enable focusable globally by using `nodesFocusable` or `edgesFocusable`.
Additionally, nodes can be moved using keyboard controls (Arrow-Keys).

#### Props

- `disableKeyboardA11y`: Use this prop to disable Keyboard controls on the graph.
- `defaultViewport`: The old `defaultZoom` and `defaultPosition` props have been merged into a single object called `defaultViewport`.
- `nodesFocusable`: Globally enable that nodes can be focused.
- `edgesFocusable`: Globally enable that edges can be focused.

#### Elements

- `focusable`: Enable focusing for a single node/edge by setting this option.
- `ariaLabel`: Specify an aria label for a node/edge

## 1.7.2

### Patch Changes

- [#547](https://github.com/bcakmakoglu/vue-flow/pull/547) [`ccf10ff`](https://github.com/bcakmakoglu/vue-flow/commit/ccf10ff77958948e53ecb9806c9b77f095bbc40d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make label coords (x,y) optional in BaseEdge

- [#551](https://github.com/bcakmakoglu/vue-flow/pull/551) [`2f187a0`](https://github.com/bcakmakoglu/vue-flow/commit/2f187a0f7d2b24b1c7cb9b5e4fad150136bdd97c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix input field focus inside nodes preventing selection rect to be created

- [#550](https://github.com/bcakmakoglu/vue-flow/pull/550) [`b734d08`](https://github.com/bcakmakoglu/vue-flow/commit/b734d085b2c84c93a49334acf90c5528da7ab709) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `elevateNodesOnSelect` option to enable/disable increasing z-index of selected nodes

- [#548](https://github.com/bcakmakoglu/vue-flow/pull/548) [`011f0ed`](https://github.com/bcakmakoglu/vue-flow/commit/011f0ed23387af1cbbbf71003d4efdeaf8bcf798) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Re-group edges by z-index on edge selection changes

## 1.7.1

### Patch Changes

- [#545](https://github.com/bcakmakoglu/vue-flow/pull/545) [`54c93b9`](https://github.com/bcakmakoglu/vue-flow/commit/54c93b92792b0bf543380dec2a7198b843d99fab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove immediate watch of VueFlow props and set prop values via state initalizer

- [#545](https://github.com/bcakmakoglu/vue-flow/pull/545) [`54c93b9`](https://github.com/bcakmakoglu/vue-flow/commit/54c93b92792b0bf543380dec2a7198b843d99fab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Only trigger store watcher immediate when elements were set, otherwise wait for changes in store to overwrite model-value

## 1.7.0

### Minor Changes

- [#539](https://github.com/bcakmakoglu/vue-flow/pull/539) [`85d5a64d`](https://github.com/bcakmakoglu/vue-flow/commit/85d5a64d519207fe3044bd68947b2edb014f288a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `getNodesInitialized` getter to store

### Patch Changes

- [#539](https://github.com/bcakmakoglu/vue-flow/pull/539) [`85d5a64d`](https://github.com/bcakmakoglu/vue-flow/commit/85d5a64d519207fe3044bd68947b2edb014f288a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make `sourceHandle` and `targetHandle` optional properties for `Connection` type

- [#542](https://github.com/bcakmakoglu/vue-flow/pull/542) [`530f286c`](https://github.com/bcakmakoglu/vue-flow/commit/530f286cb42c09cd2bc5156527fb3e9fa56878cb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Move watcher timing to `pre` and sync immediately

## 1.6.4

### Patch Changes

- [#536](https://github.com/bcakmakoglu/vue-flow/pull/536) [`fc231bec`](https://github.com/bcakmakoglu/vue-flow/commit/fc231bec1e703277ff17403daab7380ed690a744) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix watcher not triggered when passing an empty array

- [#537](https://github.com/bcakmakoglu/vue-flow/pull/537) [`4ec39fb0`](https://github.com/bcakmakoglu/vue-flow/commit/4ec39fb09ae5ad31a53067ccd2e56d69c04e8293) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix node resizer resizing not updating handle bounds

## 1.6.3

### Patch Changes

- [#534](https://github.com/bcakmakoglu/vue-flow/pull/534) [`f0f7e7e4`](https://github.com/bcakmakoglu/vue-flow/commit/f0f7e7e49a98e4e267c028f552420ce81f73adc7) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing edge class to edge wrapper

- [#534](https://github.com/bcakmakoglu/vue-flow/pull/534) [`02c945e8`](https://github.com/bcakmakoglu/vue-flow/commit/02c945e8fb719d7c81f61e8b941bf5590bc2ddba) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass attributes to edge components (i.e. style and class forwarded to BaseEdge)

- [#532](https://github.com/bcakmakoglu/vue-flow/pull/532) [`cd778715`](https://github.com/bcakmakoglu/vue-flow/commit/cd778715a22769f36656bff8e95841899a0c0317) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `vue-flow__handle` in handle bounds selector to avoid selecting elements with the `source` or `target` class names that aren't handles

## 1.6.2

### Patch Changes

- [#529](https://github.com/bcakmakoglu/vue-flow/pull/529) [`92fe1022`](https://github.com/bcakmakoglu/vue-flow/commit/92fe10224e432cf4c3bad6d3fd86af36ff4ee1b9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix store watcher not being triggered when `addNodes` or `addEdges` is called

- [#530](https://github.com/bcakmakoglu/vue-flow/pull/530) [`262bc42b`](https://github.com/bcakmakoglu/vue-flow/commit/262bc42b9c7f26b6748eed30a5a6c67d72e1a6b6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove forced update on resize observer trigger of updateNodeDimensions

## 1.6.1

### Patch Changes

- [#525](https://github.com/bcakmakoglu/vue-flow/pull/525) [`eae81603`](https://github.com/bcakmakoglu/vue-flow/commit/eae8160326bb7a67672503fccd0400333dbf2048) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `initialized` prop to `GraphNode`

- [#525](https://github.com/bcakmakoglu/vue-flow/pull/525) [`eae81603`](https://github.com/bcakmakoglu/vue-flow/commit/eae8160326bb7a67672503fccd0400333dbf2048) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix Handle component adding duplicate handlebounds when node is not properly initialized

- [#526](https://github.com/bcakmakoglu/vue-flow/pull/526) [`00a9795a`](https://github.com/bcakmakoglu/vue-flow/commit/00a9795a41ec15ce0cc342be53c912a9473ea65b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove console log

## 1.6.0

### Minor Changes

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `useGetPointerPosition` composable

- [#519](https://github.com/bcakmakoglu/vue-flow/pull/519) [`306cd3da`](https://github.com/bcakmakoglu/vue-flow/commit/306cd3dabfc57f730eb6f8939bf05369dadc31a5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Move Panel component to core package

### Patch Changes

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make `dragging` flag optional in position change type

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make dimensions optional in dimensions change type

- [#521](https://github.com/bcakmakoglu/vue-flow/pull/521) [`f50644ff`](https://github.com/bcakmakoglu/vue-flow/commit/f50644ffd2237b50bd519c6eb5f0c86dbdaf010a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove Controls component styles from default theme

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `dragging`, `selected` and `resizing` flags to `GraphNode` type

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow multiple changes to be applied to element at once

- [#519](https://github.com/bcakmakoglu/vue-flow/pull/519) [`e5829e8d`](https://github.com/bcakmakoglu/vue-flow/commit/e5829e8d7327ab2a36655b56389a882b839c95c5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove minimap styles from core package default-theme

## 1.5.11

### Patch Changes

- [#517](https://github.com/bcakmakoglu/vue-flow/pull/517) [`440186d2`](https://github.com/bcakmakoglu/vue-flow/commit/440186d2a1a3fa32c0345941682877bc138e5a39) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `dragging` prop to `GraphNode` type

- [#515](https://github.com/bcakmakoglu/vue-flow/pull/515) [`639245b1`](https://github.com/bcakmakoglu/vue-flow/commit/639245b1e2466fb2fe86deaa6d4bfb73378314d8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove console log from watcher

## 1.5.10

### Patch Changes

- [`1a4a2a62`](https://github.com/bcakmakoglu/vue-flow/commit/1a4a2a6275ca94a085fd3e15cb5373f05c23a768) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging flag (release failed)

## 1.5.9

### Patch Changes

- [`ac8c2573`](https://github.com/bcakmakoglu/vue-flow/commit/ac8c2573f61273056e9a226788ee9360a5e577f8) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging flag to nodes

## 1.5.8

### Patch Changes

- [#509](https://github.com/bcakmakoglu/vue-flow/pull/509) [`5b748a66`](https://github.com/bcakmakoglu/vue-flow/commit/5b748a6631d8b576557bea5c5aa6ab66d0abd677) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix handle prop connectable always falling back to true, even when explicitly set to false

- [#511](https://github.com/bcakmakoglu/vue-flow/pull/511) [`88b0e34c`](https://github.com/bcakmakoglu/vue-flow/commit/88b0e34cd8c4cce0e271c89cc16e5b714da2ca25) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent store watcher from being stopped on cleanup of model watcher

## 1.5.7

### Patch Changes

- [#501](https://github.com/bcakmakoglu/vue-flow/pull/501) [`ccff5b8b`](https://github.com/bcakmakoglu/vue-flow/commit/ccff5b8bd0f17bb862457c538dd0c7eb3acdfafd) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix watcher not triggering with the `onMounted` hook

- [#506](https://github.com/bcakmakoglu/vue-flow/pull/506) [`7abc3956`](https://github.com/bcakmakoglu/vue-flow/commit/7abc395654d04a7a0144d37e8787a416b0847fae) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Child nodes not properly using parent dimensions when extent is set to `parent`

## 1.5.6

### Patch Changes

- [#497](https://github.com/bcakmakoglu/vue-flow/pull/497) [`50e59604`](https://github.com/bcakmakoglu/vue-flow/commit/50e596046bdb06b59eb9b4281e9482afb92d98a3) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Separate store and model watchers from each other and allow them to be triggered after init

- [#496](https://github.com/bcakmakoglu/vue-flow/pull/496) [`1ca8c2a9`](https://github.com/bcakmakoglu/vue-flow/commit/1ca8c2a9be3c35e5873fcc2289e1108fe4354618) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Make nodes and edges deeply reactive objects, so that data changes can trigger v-model changes as well

## 1.5.5

### Patch Changes

- [#494](https://github.com/bcakmakoglu/vue-flow/pull/494) [`50a24e4`](https://github.com/bcakmakoglu/vue-flow/commit/50a24e4017d47cbe619f34f98a020ed7a2c3bf10) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Apply translateExtent on pan

- [#492](https://github.com/bcakmakoglu/vue-flow/pull/492) [`715a070`](https://github.com/bcakmakoglu/vue-flow/commit/715a0701874f8b5cd8ac643c400df89165716f1a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Properly calculate node extent on drag

- [#491](https://github.com/bcakmakoglu/vue-flow/pull/491) [`47ad11d`](https://github.com/bcakmakoglu/vue-flow/commit/47ad11dcabb3a865854731d860dcad85a043d91f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set dragging flag only if a position change happened

## 1.5.4

### Patch Changes

- [#486](https://github.com/bcakmakoglu/vue-flow/pull/486) [`912da4d`](https://github.com/bcakmakoglu/vue-flow/commit/912da4d0a6f0ed48f9455678eb978b9a5e0c08f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent valid connections on same node and same handle

- [#485](https://github.com/bcakmakoglu/vue-flow/pull/485) [`7ba6215`](https://github.com/bcakmakoglu/vue-flow/commit/7ba621554276e10e2be1cb441928354b4ddfd073) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow middle mouse pan over edges

- [#481](https://github.com/bcakmakoglu/vue-flow/pull/481) [`aed0845`](https://github.com/bcakmakoglu/vue-flow/commit/aed08458575e8832f07922b6cb104e0185306a74) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `HandleConnectableFunc` type

- [#483](https://github.com/bcakmakoglu/vue-flow/pull/483) [`9326c58`](https://github.com/bcakmakoglu/vue-flow/commit/9326c580da5cebc3fd39d1ade195291033c03e54) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Remove barrel files and use auto-imports instead (internal change)

- [#479](https://github.com/bcakmakoglu/vue-flow/pull/479) [`c673b04`](https://github.com/bcakmakoglu/vue-flow/commit/c673b044227a6702c695691be6f94f4331812dec) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Type `markerEnd` and `markerStart` in `EdgeProps`

## 1.5.3

### Patch Changes

- [#474](https://github.com/bcakmakoglu/vue-flow/pull/474) [`9568794`](https://github.com/bcakmakoglu/vue-flow/commit/9568794e36a7cc05169508a7d498510208f6a598) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix untyped connection line, node and edge slots props by patching type definition after build

## 1.5.2

### Patch Changes

- [#466](https://github.com/bcakmakoglu/vue-flow/pull/466) [`051dcc4`](https://github.com/bcakmakoglu/vue-flow/commit/051dcc477fe43033f12b17fb096c516a8cf2c485) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - use `reactive` instead of `shallowReactive` for nested node/edge properties

- [#462](https://github.com/bcakmakoglu/vue-flow/pull/462) [`7dfceb2`](https://github.com/bcakmakoglu/vue-flow/commit/7dfceb213397d82375c779bf61d24ddf2df9b27d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix model watcher overwriting empty state when setting element `onMounted` hook

- [#465](https://github.com/bcakmakoglu/vue-flow/pull/465) [`c56ee5a`](https://github.com/bcakmakoglu/vue-flow/commit/c56ee5a6e906166b451a7221d4a5a8714497f745) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow `null` as key-code

## 1.5.1

### Patch Changes

- [#459](https://github.com/bcakmakoglu/vue-flow/pull/459) [`649bdb9`](https://github.com/bcakmakoglu/vue-flow/commit/649bdb94d4e1b9dc102629eb83b9912ca1c5c7c5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add nullish check for node/edge events object to prevent err if undefined

- [#454](https://github.com/bcakmakoglu/vue-flow/pull/454) [`fc15fa3`](https://github.com/bcakmakoglu/vue-flow/commit/fc15fa3276689744ef5f41f2b8560c8370cd37e6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update model-value regardless of element arr length

## 1.5.0

### Minor Changes

- [#435](https://github.com/bcakmakoglu/vue-flow/pull/435) [`1cca3d0`](https://github.com/bcakmakoglu/vue-flow/commit/1cca3d0b8c789f2b1d749602eff560abf75e6eeb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `connecting` class to `SelectionPane` when connecting

- [#451](https://github.com/bcakmakoglu/vue-flow/pull/451) [`6047b90`](https://github.com/bcakmakoglu/vue-flow/commit/6047b908d98cdcf69297dc9ae73b6a5314cb2b4f) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Support touch for creating connections

- [#449](https://github.com/bcakmakoglu/vue-flow/pull/449) [`686b351`](https://github.com/bcakmakoglu/vue-flow/commit/686b351569e751510280f7283f7af3773aee8b44) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add experimental support for nested Vue Flow components; Align edges by adding parent flow zoom scale. Connections not supported.

### Patch Changes

- [#452](https://github.com/bcakmakoglu/vue-flow/pull/452) [`5303f10`](https://github.com/bcakmakoglu/vue-flow/commit/5303f10a80df4c71d3c526381cc27040a03f4f4d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix parent expand not working for top/left drag

- [#449](https://github.com/bcakmakoglu/vue-flow/pull/449) [`686b351`](https://github.com/bcakmakoglu/vue-flow/commit/686b351569e751510280f7283f7af3773aee8b44) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `experimentalFeatures` flag to store

## 1.4.2

### Patch Changes

- [#439](https://github.com/bcakmakoglu/vue-flow/pull/439) [`817884e`](https://github.com/bcakmakoglu/vue-flow/commit/817884e71ffb0d555b69d84b5f08f724afe891cf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elevate selected nodes zIndex by 1000 instead to 1000

- [#448](https://github.com/bcakmakoglu/vue-flow/pull/448) [`3a09339`](https://github.com/bcakmakoglu/vue-flow/commit/3a0933952e8f0d4082c7643e78edd9f381f417a9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elevate child nodes by zIndex +1

- [#447](https://github.com/bcakmakoglu/vue-flow/pull/447) [`06fc9f2`](https://github.com/bcakmakoglu/vue-flow/commit/06fc9f2ec43ac58d3e6257d8ff5a1948330f060a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix initial node extent not applied

## 1.4.1

### Patch Changes

- [#425](https://github.com/bcakmakoglu/vue-flow/pull/425) [`da0a294`](https://github.com/bcakmakoglu/vue-flow/commit/da0a294aa47b091cd846168594d3a01bde057315) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Update deps

- [#434](https://github.com/bcakmakoglu/vue-flow/pull/434) [`b24b9ef`](https://github.com/bcakmakoglu/vue-flow/commit/b24b9efe1118b9d3151550257620b4b2c5088fca) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix improper if clause when checking for selection key code as bool

- [#429](https://github.com/bcakmakoglu/vue-flow/pull/429) [`1fc60bf`](https://github.com/bcakmakoglu/vue-flow/commit/1fc60bf1bb700ce4c7321d85b7421c41b235ab2b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - When Connection Mode is `Loose`, use all handles as possible source handles for connection lines

- [#433](https://github.com/bcakmakoglu/vue-flow/pull/433) [`d82cb67`](https://github.com/bcakmakoglu/vue-flow/commit/d82cb674c6ae7be453ac6c145a2478a2efa2cedb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing `connectionExists` utility export

## 1.4.0

### Minor Changes

- [#360](https://github.com/bcakmakoglu/vue-flow/pull/360) [`a11edae`](https://github.com/bcakmakoglu/vue-flow/commit/a11edae9ecb95c8ca0ecef70ff9414415bafb23b) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `interactionWidth` prop to edges. Sets radius of pointer interactivity for edges

## 1.3.3

### Patch Changes

- [#412](https://github.com/bcakmakoglu/vue-flow/pull/412) [`630434d`](https://github.com/bcakmakoglu/vue-flow/commit/630434d5cfaae90eda96e0a49c488860fe994d32) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use node name as class name

## 1.3.2

### Patch Changes

- [#407](https://github.com/bcakmakoglu/vue-flow/pull/407) [`2874cd9`](https://github.com/bcakmakoglu/vue-flow/commit/2874cd969ad31bf2ec578c6c9c40399f9d59244a) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent default edge options overwriting actual edge values

- [#407](https://github.com/bcakmakoglu/vue-flow/pull/407) [`7908e02`](https://github.com/bcakmakoglu/vue-flow/commit/7908e0224e5f54f817ac34c3c34e3da3ffb7cfb1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fall back to default edge or node type if custom type cannot be resolved

- [#389](https://github.com/bcakmakoglu/vue-flow/pull/389) [`6e0dd5b`](https://github.com/bcakmakoglu/vue-flow/commit/6e0dd5b3d2fc3d4d02866d8454dabcc1ee675e77) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Place Vue Flow Container in it's own stacking context

## 1.3.1

### Patch Changes

- [#402](https://github.com/bcakmakoglu/vue-flow/pull/402) [`d7ade98`](https://github.com/bcakmakoglu/vue-flow/commit/d7ade98720a5407a58e1e0924d53723b1600d044) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use `event.composedPath` as event target when checking for input dom nodes

- [#403](https://github.com/bcakmakoglu/vue-flow/pull/403) [`8930d2e`](https://github.com/bcakmakoglu/vue-flow/commit/8930d2ee957858ea67ec3e125e1ca0a9a41f7fae) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Stop reset of user-selection rect on mouse leave event

- [#398](https://github.com/bcakmakoglu/vue-flow/pull/398) [`43953c9`](https://github.com/bcakmakoglu/vue-flow/commit/43953c9d1f48dececff8cef84f85bbee8fec44db) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 3

## 1.3.0

### Minor Changes

- [#394](https://github.com/bcakmakoglu/vue-flow/pull/394) [`1403b65`](https://github.com/bcakmakoglu/vue-flow/commit/1403b65f612bd5c905b0ec240d4d16c16ff86df4) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `nodesInitialized` event hook

- [#387](https://github.com/bcakmakoglu/vue-flow/pull/387) [`9530290`](https://github.com/bcakmakoglu/vue-flow/commit/95302901335303c4460373848ee07a532f150678) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass node intersections to node drag events (on single node drag)

- [#387](https://github.com/bcakmakoglu/vue-flow/pull/387) [`a19b458`](https://github.com/bcakmakoglu/vue-flow/commit/a19b4581a7e237f746e7cf8837c25f3c36249962) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add intersection utils to help with checking if a node intersects with either other nodes or a given area

  ### Usage

  - You can either use the action `getIntersectingNodes` to find all nodes that intersect with a given node

  ```js
  const { onNodeDrag, getIntersectingNodes, getNodes } = useVueFlow();

  onNodeDrag(({ node }) => {
    const intersections = getIntersectingNodes(node).map((n) => n.id);

    getNodes.value.forEach((n) => {
      // highlight nodes that are intersecting with the dragged node
      n.class = intersections.includes(n.id) ? "highlight" : "";
    });
  });
  ```

  - Node drag events will provide you with the intersecting nodes without having to call the action explicitly.

  ```js
  onNodeDrag(({ intersections }) => {
    getNodes.value.forEach((n) => {
      n.class = intersections?.some((i) => i.id === n.id) ? "highlight" : "";
    });
  });
  ```

  - Or you can use the `isIntersecting` util to check if a node intersects with a given area

  ```js
  const { onNodeDrag, isNodeIntersecting } = useVueFlow();

  onNodeDrag(({ node }) => {
    // highlight the node if it is intersecting with the given area
    node.class = isNodeIntersecting(node, {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    })
      ? "highlight"
      : "";
  });
  ```

- [#396](https://github.com/bcakmakoglu/vue-flow/pull/396) [`03412ac`](https://github.com/bcakmakoglu/vue-flow/commit/03412acf0d4452c104cc342e5e11eb3a7671fe72) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add zoomable and pannable to MiniMap

  ### Usage

  - Set `zoomable` and `pannable` to `true` in `MiniMap` component to enable interactions with the MiniMap

  ```vue
  <template>
    <VueFlow v-model="elements">
      <MiniMap :zoomable="true" :pannable="true" />
    </VueFlow>
  </template>
  ```

### Patch Changes

- [#361](https://github.com/bcakmakoglu/vue-flow/pull/361) [`43ff2a4`](https://github.com/bcakmakoglu/vue-flow/commit/43ff2a42e6d77251b3fe7987afa02c19cdb2f240) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `EdgeLabelRenderer` component export

  ### Usage

  - You can use the `EdgeLabelRenderer` component to render the label of an edge outside the SVG context of edges.
  - The `EdgeLabelRenderer` component is a component that handles teleporting your edge label into a HTML context
  - This is useful if you want to use HTML elements in your edge label, like buttons

  ```vue
  <script lang="ts" setup>
  import type { EdgeProps, Position } from "@vue-flow/core";
  import { EdgeLabelRenderer, getBezierPath, useVueFlow } from "@vue-flow/core";
  import type { CSSProperties } from "vue";

  interface CustomEdgeProps<T = any> extends EdgeProps<T> {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    sourcePosition: Position;
    targetPosition: Position;
    data: T;
    markerEnd: string;
    style: CSSProperties;
  }

  const props = defineProps<CustomEdgeProps>();

  const { removeEdges } = useVueFlow();

  const path = $computed(() => getBezierPath(props));
  </script>

  <script lang="ts">
  export default {
    inheritAttrs: false,
  };
  </script>

  <template>
    <path
      :id="id"
      :style="style"
      class="vue-flow__edge-path"
      :d="path[0]"
      :marker-end="markerEnd"
    />

    <EdgeLabelRenderer>
      <div
        :style="{
          pointerEvents: 'all',
          position: 'absolute',
          transform: `translate(-50%, -50%) translate(${path[1]}px,${path[2]}px)`,
        }"
        class="nodrag nopan"
      >
        <button class="edgebutton" @click="removeEdges([id])">×</button>
      </div>
    </EdgeLabelRenderer>
  </template>

  <style>
  .edgebutton {
    border-radius: 999px;
    cursor: pointer;
  }
  .edgebutton:hover {
    box-shadow: 0 0 0 2px pink, 0 0 0 4px #f05f75;
  }
  </style>
  ```

## 1.2.2

### Patch Changes

- [#388](https://github.com/bcakmakoglu/vue-flow/pull/388) [`76ad5838`](https://github.com/bcakmakoglu/vue-flow/commit/76ad5838d9cd09df39ebe35e0983605b3443d8d6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Always set handle ids (using auto-generated id if none is passed)

- [#388](https://github.com/bcakmakoglu/vue-flow/pull/388) [`ffe65636`](https://github.com/bcakmakoglu/vue-flow/commit/ffe65636189b3ff681e629cd6d3933f52be2a04c) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - skip connectable for handles unrelated to connected edges

- [#392](https://github.com/bcakmakoglu/vue-flow/pull/392) [`fcffd492`](https://github.com/bcakmakoglu/vue-flow/commit/fcffd49221a77b0df88183caa4513f9c00bbb660) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use all handles, regardless of type, when ConnectionMode is `Loose`

## 1.2.1

### Patch Changes

- [#378](https://github.com/bcakmakoglu/vue-flow/pull/378) [`9089861c`](https://github.com/bcakmakoglu/vue-flow/commit/9089861ce78584cb524c3da178cd1c0252ccee30) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable user selection if `elementsSelectable` is false

- [#378](https://github.com/bcakmakoglu/vue-flow/pull/378) [`9089861c`](https://github.com/bcakmakoglu/vue-flow/commit/9089861ce78584cb524c3da178cd1c0252ccee30) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent node selection box from appearing before mouseup

- [#380](https://github.com/bcakmakoglu/vue-flow/pull/380) [`2c3ea836`](https://github.com/bcakmakoglu/vue-flow/commit/2c3ea836f1b62fb808f1f7a00bae5b2e917381bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use shallowRef for node/edge data and event objects so they trigger a re-render on custom nodes/edges

## 1.2.0

### Minor Changes

- [#123](https://github.com/bcakmakoglu/vue-flow/pull/123) [`3105bd0`](https://github.com/bcakmakoglu/vue-flow/commit/3105bd051ab4ac72c95e524dcb5c551ee4f812f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Disable console warnings for production node-envs

## 1.1.4

### Patch Changes

- [#353](https://github.com/bcakmakoglu/vue-flow/pull/353) [`8f95187`](https://github.com/bcakmakoglu/vue-flow/commit/8f95187a6c474aa299fde3dd3c80145483b1b238) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Allow undefined as custom theme var value

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Node and Edge data and events to be definitely typed when passed as NodeProps or EdgeProps

- [#352](https://github.com/bcakmakoglu/vue-flow/pull/352) [`bff576b`](https://github.com/bcakmakoglu/vue-flow/commit/bff576bc0494a34eedf6eafb03d84d074d372b79) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `overflow: visible` to control btn svgs (fixes safari bug where svgs aren't showing up)

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Extend Elements/FlowElements generics to differentiate between Node and Edge data and custom events

- [#349](https://github.com/bcakmakoglu/vue-flow/pull/349) [`61d2b88`](https://github.com/bcakmakoglu/vue-flow/commit/61d2b88ebc9fcde7beb89a877f3bf975c00e22d5) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add Generic to isNode and isEdge helpers

- [#350](https://github.com/bcakmakoglu/vue-flow/pull/350) [`92a69a6`](https://github.com/bcakmakoglu/vue-flow/commit/92a69a617fc6ddbdc8c1eaeaa8ca040bbc67285e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Set nodes' dragging prop on drag start and end (fixes grabbing hand not showing on mousedown / not disappearing on mouseup)

## 1.1.3

### Patch Changes

- [#342](https://github.com/bcakmakoglu/vue-flow/pull/342) [`72c203e`](https://github.com/bcakmakoglu/vue-flow/commit/72c203e3d527376221673fccb62dc99ff8061a23) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge text not calculating dimensions properly

## 1.1.2

### Patch Changes

- [#337](https://github.com/bcakmakoglu/vue-flow/pull/337) [`12d9f79`](https://github.com/bcakmakoglu/vue-flow/commit/12d9f79d1ba5ee3b2e6b45db54ee466156182f61) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add dragging class to nodes on `drag` instead of `dragStart`

- [#341](https://github.com/bcakmakoglu/vue-flow/pull/341) [`d2ed19e`](https://github.com/bcakmakoglu/vue-flow/commit/d2ed19eebad2a8d3ee40f55f3f1dc63037ef73bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass edge styles to edge path element

- [`949d19f`](https://github.com/bcakmakoglu/vue-flow/commit/949d19ff5d120f30ffbef35beb960ce6037082bb) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix edge texts not properly aligning to center

- [#333](https://github.com/bcakmakoglu/vue-flow/pull/333) [`8583e13`](https://github.com/bcakmakoglu/vue-flow/commit/8583e13db98fe32f23d91b1952cee91778fd434e) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add missing dragging class to pane

- [#336](https://github.com/bcakmakoglu/vue-flow/pull/336) [`1aaac25`](https://github.com/bcakmakoglu/vue-flow/commit/1aaac25e76367602c9de9198ba1202b728267371) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Elements not properly unselected when clicking node and edge afterwards

## 1.1.1

### Patch Changes

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`1e5a77d6`](https://github.com/bcakmakoglu/vue-flow/commit/1e5a77d608c79c7701f97a81690fa5babc7c2514) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Prevent `mouseup` handler from resetting `startHandle` before connections can be made when using `connectOnClick`

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`18a812db`](https://github.com/bcakmakoglu/vue-flow/commit/18a812db6445941ff626921a311f2f2aefd84968) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Passing `single` option breaks `connectable` check when no handle ids are set

  - Pass `connectable` to correct handle prop in default node types

- [#328](https://github.com/bcakmakoglu/vue-flow/pull/328) [`a415353b`](https://github.com/bcakmakoglu/vue-flow/commit/a415353ba5fe3bb29b33704baf5d83b869e508f1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `dragging` class name to pane on drag

## 1.1.0

### Minor Changes

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`78f9ee1c`](https://github.com/bcakmakoglu/vue-flow/commit/78f9ee1cb77cc00590b8d4529da7cd124ddfc0f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Add `HandleConnectable` type
  - Update `connectable` prop of `Handle` to `HandleConnectable` type
  - Allow to specify if Handles are connectable
    - any number of connections
    - none
    - single connection
    - or a cb to determine whether the Handle is connectable

  Example:

  ```vue
  <script lang="ts" setup>
  import { Handle, HandleConnectable } from "@vue-flow/core";

  const handleConnectable: HandleConnectable = (node, connectedEdges) => {
    console.log(node, connectedEdges);
    return true;
  };
  </script>
  <template>
    <!-- single connection -->
    <Handle type="target" position="left" connectable="single" />
    <div>Custom Node</div>
    <!-- cb -->
    <Handle id="a" position="right" :connectable="handleConnectable" />
  </template>
  ```

  - Update `node.connectable` prop to `HandleConnectable`

  For Example:

  ```js
  const nodes = ref([
    {
      id: "1",
      position: { x: 0, y: 0 },
      connectable: "single", // each handle is only connectable once (default node for example)
    },
    {
      id: "2",
      position: { x: 200, y: 0 },
      connectable: (node, connectedEdges) => {
        return true; // will allow any number of connections
      },
    },
    {
      id: "3",
      position: { x: 400, y: 0 },
      connectable: true, // will allow any number of connections
    },
    {
      id: "4",
      position: { x: 200, y: 0 },
      connectable: false, // will disable handles
    },
  ]);
  ```

### Patch Changes

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`e175cf81`](https://github.com/bcakmakoglu/vue-flow/commit/e175cf8157be1851651d6df0a9e87f732b53de59) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Add `vueflow` pkg that exports all features

  ```vue
  <script setup>
  // `vueflow` pkg exports all features, i.e. core + additional components
  import { VueFlow, Background, MiniMap, Controls } from "vueflow";
  </script>

  <template>
    <VueFlow>
      <Background />
      <MiniMap />
      <Controls />
    </VueFlow>
  </template>
  ```

  ### Chores

  - Rename `core` pkg directory to `core` from `vue-flow`
  - Rename bundle outputs

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`e1c28a26`](https://github.com/bcakmakoglu/vue-flow/commit/e1c28a26c75a86b8c2790480bb8dadf37ad2ff12) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Simplify `useHandle` usage
  - Pass props to the composable as possible refs
    - Still returns onClick & onMouseDown handlers but only expects mouse event now

  Before:

  ```vue
  <script lang="ts" setup>
  import { useHandle, NodeId } from "@vue-flow/core";

  const nodeId = inject(NodeId);

  const handleId = "my-handle";

  const type = "source";

  const isValidConnection = () => true;

  const { onMouseDown } = useHandle();

  const onMouseDownHandler = (event: MouseEvent) => {
    onMouseDown(
      event,
      handleId,
      nodeId,
      type === "target",
      isValidConnection,
      undefined
    );
  };
  </script>

  <template>
    <div @mousedown="onMouseDownHandler" />
  </template>
  ```

  After:

  ```vue
  <script lang="ts" setup>
  import { useHandle, useNode } from "@vue-flow/core";

  const { nodeId } = useNode();

  const handleId = "my-handle";

  const type = "source";

  const isValidConnection = () => true;

  const { onMouseDown } = useHandle({
    nodeId,
    handleId,
    isValidConnection,
    type,
  });
  </script>

  <template>
    <div @mousedown="onMouseDown" />
  </template>
  ```

- [#311](https://github.com/bcakmakoglu/vue-flow/pull/311) [`08ad1735`](https://github.com/bcakmakoglu/vue-flow/commit/08ad17356f5fbd50255af27f7c482da756eda4aa) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # Bugfixes

  - Edges not returned by getter when `paneReady` event is triggered

## 1.0.0

### Major Changes

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`939bff50`](https://github.com/bcakmakoglu/vue-flow/commit/939bff503039af3b790160640548ddde984cf2bc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Simplify edge path calculations
    - remove `getEdgeCenter` and `getSimpleEdgeCenter`

  # Breaking Changes

  - `getEdgeCenter` has been removed
    - Edge center positions can now be accessed from `getBezierPath` or `getSmoothStepPath` functions

  Before:

  ```js
  import { getBezierPath, getEdgeCenter } from "@braks/vue-flow";

  // used to return the path string only
  const edgePath = computed(() => getBezierPath(pathParams));

  // was necessary to get the centerX, centerY of an edge
  const centered = computed(() => getEdgeCenter(centerParams));
  ```

  After:

  ```js
  import { getBezierPath } from "@vue-flow/core";

  // returns the path string and the center positions
  const [path, centerX, centerY] = computed(() => getBezierPath(pathParams));
  ```

- [#305](https://github.com/bcakmakoglu/vue-flow/pull/305) [`47d837aa`](https://github.com/bcakmakoglu/vue-flow/commit/47d837aac096e59e7f55213990dff2cc7eba0c01) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - # What's changed?

  - Change pkg scope from 'braks' to 'vue-flow'
    - Add `@vue-flow/core` package
    - Add `@vue-flow/additional-components` package
    - Add `@vue-flow/pathfinding-edge` package
    - Add `@vue-flow/resize-rotate-node` package

  # Features

  - `useNode` and `useEdge` composables
    - can be used to access current node/edge (or by id) and their respective element refs (if used inside the elements' context, i.e. a custom node/edge)
  - `selectionKeyCode` as `true`
    - allows for figma style selection (i.e. create a selection rect without holding shift or any other key)
  - Handles to trigger handle bounds calculation on mount
    - if no handle bounds are found, a Handle will try to calculate its bounds on mount
    - should remove the need for `updateNodeInternals` on dynamic handles
  - Testing for various features using Cypress 10

  # Bugfixes

  - Fix `removeSelectedEdges` and `removeSelectedNodes` actions not properly removing elements from store

  # Breaking Changes

  - `@vue-flow/core` package is now required to use vue-flow
  - `@vue-flow/additional-components` package contains `Background`, `MiniMap` and `Controls` components and related types
    - When switching to the new pkg scope, you need to change the import path.

  Before:

  ```js
  import { VueFlow, Background, MiniMap, Controls } from "@braks/vue-flow";
  ```

  After

  ```js
  import { VueFlow } from "@vue-flow/core";
  import {
    Background,
    MiniMap,
    Controls,
  } from "@vue-flow/additional-components";
  ```
