'use strict'

const libStats = require('@tetherto/miningos-tpl-wrk-thing/workers/lib/stats')

libStats.spec.sensor_default = { ops: libStats.spec.default.ops }

module.exports = libStats
