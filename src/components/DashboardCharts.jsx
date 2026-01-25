import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                <p className="font-medium text-gray-900">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm" style={{ color: entry.color }}>
                        {entry.name}: {typeof entry.value === 'number' && entry.name.includes('Revenue') 
                            ? `$${entry.value.toLocaleString()}` 
                            : entry.value.toLocaleString()}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

// Monthly Properties Bar Chart
export const MonthlyPropertiesChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
                dataKey="properties" 
                fill="#3b82f6" 
                name="Properties Listed"
                radius={[4, 4, 0, 0]}
            />
        </BarChart>
    </ResponsiveContainer>
);

// Views Line Chart
export const ViewsLineChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
                type="monotone" 
                dataKey="views" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Total Views"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            />
        </LineChart>
    </ResponsiveContainer>
);

// Property Types Pie Chart
export const PropertyTypesPieChart = ({ data }) => {
    const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip 
                    formatter={(value, name) => [`${value}%`, name]}
                    labelFormatter={() => 'Property Distribution'}
                />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

// Revenue Area Chart
export const RevenueAreaChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <YAxis 
                tick={{ fontSize: 12 }}
                stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
                type="monotone"
                dataKey="rental"
                stackId="1"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                name="Rental Revenue"
            />
            <Area
                type="monotone"
                dataKey="sales"
                stackId="1"
                stroke="#f59e0b"
                fill="#f59e0b"
                name="Sales Revenue"
            />
        </AreaChart>
    </ResponsiveContainer>
);