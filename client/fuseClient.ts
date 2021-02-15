import { fusebox } from 'fuse-box';
const fuse = fusebox({
  entry: 'src/index.tsx',
  target: 'browser',
  devServer: true,
  webIndex: {
    template: 'src/index.html', 
  },
});

fuse.runDev();