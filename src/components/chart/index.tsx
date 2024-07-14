import { curveBasis, line, scaleLinear, scaleTime, scalePoint } from "d3";
import { Canvas, Path, Skia, useFont, Line, vec, DashPathEffect, Group, Text, LinearGradient } from "@shopify/react-native-skia";
import { DataType } from "./data";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";
import { useLayoutEffect } from "react";

interface LineChartProps {
    data: DataType[];
    margin: number;
    height: number;
    width: number;
}

export default function LineChart({ data, margin, height, width }: LineChartProps) {

    const state = useSharedValue(0);

    useLayoutEffect(() => {
        state.value = withTiming(1, {
            duration: 1000,
            easing: Easing.bezier(0.5, 0.08, 0, 1),
        });
    }, [])

    const xDomain = data.map((dt) => dt.label);
    const xRange = [margin, width - margin];
    const getXAxis = scalePoint().domain(xDomain).range(xRange).padding(0);

    const max = Math.max(...data.map((dt) => dt.value));
    const min = Math.min(...data.map((dt) => dt.value));
    const yDomain = [min, max];
    const yRange = [height, 0];

    const getYAxis = scaleLinear().domain(yDomain).range(yRange);

    const curvedLine = line<DataType>()
        .x((d) => getXAxis(d.label)!)
        .y((d) => getYAxis(d.value))
        .curve(curveBasis)(data);


    const linePath = Skia.Path.MakeFromSVGString(curvedLine!);
    const fillPath = Skia.Path.MakeFromSVGString(curvedLine!);
    fillPath!.lineTo(width - margin, height)
        .lineTo(margin, height)
        .lineTo(margin, fillPath?.getPoint(0)!.y!)
        .close();


    return (
        <Canvas style={[{ width, height }]}>
            <Group >
                <Line
                    p1={vec(10, 0)}
                    p2={vec(width - 10, 0)}
                    color="#E5E5E5"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line
                    p1={vec(10, height * 0.33)}
                    p2={vec(width - 10, height * 0.33)}
                    color="#E5E5E5"
                    style="stroke"
                    strokeWidth={1}
                />
                <Line
                    p1={vec(10, height * 0.66)}
                    p2={vec(width - 10, height * 0.66)}
                    color="#E5E5E5"
                    style="stroke"
                    strokeWidth={1}
                />
            </Group>

            <Group>

                <Path
                    path={linePath!}
                    color='#0BC2AC'
                    strokeWidth={3.12}
                    style="stroke"
                    strokeCap="round"
                    end={state}
                />

                <Path
                    path={fillPath!}
                    color='#0BC2AC'
                    style="fill"
                    opacity={state}
                >
                    <LinearGradient
                        colors={['#0BC2AC', '#0bc2ad15', '#0bc2ad15', '#0bc2ad15',]}
                        start={vec(0, 0)}
                        end={vec(0, height)}
                        
                    />
                </Path>
            </Group>
        </Canvas>
    )
}