# @vue-flow/node-resizer

## 2.0.0-next.0

### Patch Changes

- Updated dependencies [[`702ff95`](https://github.com/bcakmakoglu/vue-flow/commit/702ff950096dd3f563e7747c32d8627239c652ce), [`6da35f5`](https://github.com/bcakmakoglu/vue-flow/commit/6da35f5767588f836292c91ce045b6c3b54a579e), [`f6bb711`](https://github.com/bcakmakoglu/vue-flow/commit/f6bb7111bf53b174ddbef5b458d249188d8b1524)]:
  - @vue-flow/core@2.0.0-next.0

## 1.4.0

### Minor Changes

- [#1401](https://github.com/bcakmakoglu/vue-flow/pull/1401) [`ebf387e`](https://github.com/bcakmakoglu/vue-flow/commit/ebf387eeea49cce72ba2e9546e9dbfb969d72ec9) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Replace node initialized check with dimensions check

## 1.3.6

### Patch Changes

- [#1215](https://github.com/bcakmakoglu/vue-flow/pull/1215) [`b0e6ac79`](https://github.com/bcakmakoglu/vue-flow/commit/b0e6ac79ff45da5e0bc1b080e2cfca39fc893cdc) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Pass correct node id to resize control

## 1.3.5

### Patch Changes

- [#1113](https://github.com/bcakmakoglu/vue-flow/pull/1113) [`1f3c85a6`](https://github.com/bcakmakoglu/vue-flow/commit/1f3c85a67670535ad4958ed3f33529db75bec8f1) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Wait for node dimensions to be initialised before enforcing min/max height/width on nodes

## 1.3.4

### Patch Changes

- [#1087](https://github.com/bcakmakoglu/vue-flow/pull/1087) [`48bcb29c`](https://github.com/bcakmakoglu/vue-flow/commit/48bcb29c88ed24409fbca17be028c1b5b2c4ee90) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Enforce minHeight, minWidth and maxHeight, maxWidth by updating node styles whenever these props change (if an update is necessary)

## 1.3.3

### Patch Changes

- [#1015](https://github.com/bcakmakoglu/vue-flow/pull/1015) [`f4d8d540`](https://github.com/bcakmakoglu/vue-flow/commit/f4d8d540ba57666b0bb05f8cad7eca794b6dc884) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Use correct prop names for class and style

## 1.3.2

### Patch Changes

- [#890](https://github.com/bcakmakoglu/vue-flow/pull/890) [`9065311`](https://github.com/bcakmakoglu/vue-flow/commit/9065311970952b910a2a154e8a0871fa095a71f6) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Render nothing when `isVisible` prop is set to false

## 1.3.1

### Patch Changes

- [#865](https://github.com/bcakmakoglu/vue-flow/pull/865) [`9ce7bdc4`](https://github.com/bcakmakoglu/vue-flow/commit/9ce7bdc4908dda4dea299e5f469b252ac20a12ab) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `exports` field to package.json

## 1.3.0

### Minor Changes

- [#739](https://github.com/bcakmakoglu/vue-flow/pull/739) [`9e48211d`](https://github.com/bcakmakoglu/vue-flow/commit/9e48211de7a3ca34ecac2dbd2e0d580cd839e9c0) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add maxHeight and maxWidth props to node resizer

## 1.2.2

### Patch Changes

- [#716](https://github.com/bcakmakoglu/vue-flow/pull/716) [`1685827d`](https://github.com/bcakmakoglu/vue-flow/commit/1685827d0ea1dc9864f95a1b3a54fbc43a296e5d) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Fix umd pkg names and use the correct vue flow core umd pkg name in plugins

## 1.2.1

### Patch Changes

- [#682](https://github.com/bcakmakoglu/vue-flow/pull/682) [`b08cb4d4`](https://github.com/bcakmakoglu/vue-flow/commit/b08cb4d45904c229d9ecda5e3cb477cbb7a6acaf) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add compat mode to components to avoid breaking when used with @vue/compat

## 1.2.0

### Minor Changes

- [#633](https://github.com/bcakmakoglu/vue-flow/pull/633) [`5abe4ca2`](https://github.com/bcakmakoglu/vue-flow/commit/5abe4ca2e5ab7a16f8a650edcaa959e0a710de11) Thanks [@AlexeyMeshkov](https://github.com/AlexeyMeshkov)! - Add `keepAspectRatio` option to node-resizer.

  - Aspect ratio can either be a number or a boolean
  - When using a boolean value, the aspect ratio will match the initial node sizes' aspect ratio

## 1.1.0

### Minor Changes

- [#646](https://github.com/bcakmakoglu/vue-flow/pull/646) [`a6a6c0b1`](https://github.com/bcakmakoglu/vue-flow/commit/a6a6c0b1afef357e163ddc9b2d44bece76dc1c41) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add `shouldResize` option. Allows users to cancel resizing.

## 1.0.2

### Patch Changes

- [#616](https://github.com/bcakmakoglu/vue-flow/pull/616) [`b16e3564`](https://github.com/bcakmakoglu/vue-flow/commit/b16e3564708c5429ad594156341fa3e95f84d3b2) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Upgrade to vite 4 & update deps

## 1.0.1

### Patch Changes

- [`c9d37fc`](https://github.com/bcakmakoglu/vue-flow/commit/c9d37fcad85e6f7643d3905d34a2d2c6566b3977) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Correct pkg main field

## 1.0.0

### Major Changes

- [#498](https://github.com/bcakmakoglu/vue-flow/pull/498) [`1739797c`](https://github.com/bcakmakoglu/vue-flow/commit/1739797cfebca2d0f9a5d6864dc75c2e1f6ee722) Thanks [@bcakmakoglu](https://github.com/bcakmakoglu)! - Add node-resizer package
