import { NextResponse } from 'next/server'

export function GET() {
  const healthData = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? '1.0.0',
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
    services: {
      database: checkDatabaseHealth(),
      redis: checkRedisHealth(),
      apis: checkAPIHealth(),
    }
  }

  const isHealthy = Object.values(healthData.services).every(service => service.status === 'ok')
  const statusCode = isHealthy ? 200 : 503

  return NextResponse.json(healthData, { status: statusCode })
}

function checkDatabaseHealth() {
  try {
    // In a real implementation, you would check database connectivity
    // For now, we'll simulate a health check
    return {
      status: 'ok',
      responseTime: Math.random() * 50 + 10, // Simulated response time
      lastChecked: new Date().toISOString()
    }
  } catch {
    return {
      status: 'error',
      error: 'Database connection failed',
      lastChecked: new Date().toISOString()
    }
  }
}

function checkRedisHealth() {
  try {
    // In a real implementation, you would check Redis connectivity
    // For now, we'll simulate a health check
    return {
      status: 'ok',
      responseTime: Math.random() * 20 + 5, // Simulated response time
      lastChecked: new Date().toISOString()
    }
  } catch {
    return {
      status: 'error',
      error: 'Redis connection failed',
      lastChecked: new Date().toISOString()
    }
  }
}

function checkAPIHealth() {
  try {
    // Check external API dependencies
    // In a real implementation, you would make actual API calls
    // For now, we'll simulate API health checks
    return {
      status: 'ok',
      responseTime: Math.random() * 100 + 20, // Simulated response time
      lastChecked: new Date().toISOString(),
      services: {
        penny: { status: 'ok', responseTime: 45 },
        forgeSight: { status: 'ok', responseTime: 67 },
        cotiza: { status: 'ok', responseTime: 23 },
        dhanam: { status: 'ok', responseTime: 34 },
        avala: { status: 'ok', responseTime: 56 },
        factlas: { status: 'ok', responseTime: 78 },
      }
    }
  } catch {
    return {
      status: 'error',
      error: 'API health check failed',
      lastChecked: new Date().toISOString()
    }
  }
}