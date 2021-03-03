import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve' //将外部引入的js打包进来
import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete' //
import commonjs from '@rollup/plugin-commonjs' //将CommonJS模块转换为ES6, 方便rollup直接调用
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
const isProduction = process.env.NODE_ENV === 'production'
export default {
    input: './src/index.ts',
    output: [
        {
            format: 'umd',
            file: 'dist/index.umd.js',
            name: 'example',
        },
        {
            format: 'umd',
            file: 'demo/index.umd.js',
            name: 'example',
        },
        {
            format: 'cjs',
            file: 'dist/index.cjs.js',
        },
        {
            format: 'es',
            file: 'dist/index.esm.js',
        },
    ],
    plugins: [
        del({ targets: ['dist', 'demo/index.umd.js'] }),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        isProduction && terser(),
        babel({
            exclude: 'node_modules/**',
        }),
        // 开启服务
        !isProduction &&
            serve({
                open: false,
                host: 'localhost',
                port: 9008,
                historyApiFallback: true,
                contentBase: 'demo',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }),
        // 热更新
        !isProduction && livereload(),
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        sourceMaps(),
    ],
}
