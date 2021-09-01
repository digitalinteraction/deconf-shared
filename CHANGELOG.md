# CHANGELOG

## 3.0.0

**breaking changes**

Code has been split up based on the new deconf-api modules

- `ConfigFlag` renamed to `PageFlag`
- `ConfigSettings` renamed to `ConferenceConfig`
- `Localised` now has optional strings

**features**

- `JsonRepresentation` - A utility type to jsonify dates on objects
- `SessionAttendance`
- `CarbonCalculation`
- `CountryLocation`
- `ConferenceConfigJson`
- `Interpreter`
- `InterpretBooth`
- `ActiveBooth`
- `ActiveInterpreter`
- `DeconfConfig`
- `VerifyToken`

## 2.0.1

**fixes**

- Include the build this time

## 2.0.0

**changes**

```diff
+Session.participantCap number | null
```

## 1.0.1

**fixes**

- removed superstruct dependency as it wasn't needed

## 1.0.0

Initial release
